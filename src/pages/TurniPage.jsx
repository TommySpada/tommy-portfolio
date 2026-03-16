import { useState, useCallback, useMemo } from 'react';
import FadeContent from '../components/FadeContent/FadeContent';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TurniPage() {
  const [students, setStudents] = useState([]);
  const [fileName, setFileName] = useState('');
  const [numTurns, setNumTurns] = useState(3);
  const [perTurn, setPerTurn] = useState(2);
  const [perTurnCustom, setPerTurnCustom] = useState([]);
  const [doShuffle, setDoShuffle] = useState(true);
  const [turns, setTurns] = useState([]);
  const [remaining, setRemaining] = useState([]);
  const [selectedRemaining, setSelectedRemaining] = useState(new Set());
  const [bulkTarget, setBulkTarget] = useState(0);
  const [copied, setCopied] = useState(false);

  // Update perTurnCustom when numTurns or perTurn changes
  const perTurnValues = useMemo(() => {
    const arr = [];
    for (let i = 0; i < numTurns; i++) {
      arr.push(perTurnCustom[i] ?? perTurn);
    }
    return arr;
  }, [numTurns, perTurn, perTurnCustom]);

  const handleFile = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      const lines = text.split(/\r?\n/).filter(l => l.trim());
      // Skip header if it looks like one
      const names = [];
      lines.forEach((line) => {
        const cols = line.split(',');
        cols.forEach((col) => {
          const name = col.trim();
          if (name && name.toLowerCase() !== 'nome' && name.toLowerCase() !== 'name') {
            names.push(name);
          }
        });
      });
      setStudents(names);
      setTurns([]);
      setRemaining([]);
    };
    reader.readAsText(file);
  }, []);

  const generate = useCallback(() => {
    if (students.length === 0) return;
    const list = doShuffle ? shuffle(students) : [...students];
    const result = [];
    let idx = 0;
    for (let t = 0; t < numTurns; t++) {
      const count = perTurnValues[t] || perTurn;
      result.push(list.slice(idx, idx + count));
      idx += count;
    }
    setTurns(result);
    setRemaining(list.slice(idx));
    setSelectedRemaining(new Set());
  }, [students, doShuffle, numTurns, perTurnValues, perTurn]);

  const clear = useCallback(() => {
    setTurns([]);
    setRemaining([]);
    setSelectedRemaining(new Set());
  }, []);

  const moveStudent = useCallback((fromTurn, studentIdx) => {
    const targetStr = prompt(`Sposta in quale turno? (1-${turns.length}, oppure "r" per rimanenti)`);
    if (!targetStr) return;
    if (targetStr.toLowerCase() === 'r') {
      const student = turns[fromTurn][studentIdx];
      setTurns(prev => prev.map((t, i) => i === fromTurn ? t.filter((_, si) => si !== studentIdx) : t));
      setRemaining(prev => [...prev, student]);
    } else {
      const target = parseInt(targetStr) - 1;
      if (isNaN(target) || target < 0 || target >= turns.length) return;
      const student = turns[fromTurn][studentIdx];
      setTurns(prev => prev.map((t, i) => {
        if (i === fromTurn) return t.filter((_, si) => si !== studentIdx);
        if (i === target) return [...t, student];
        return t;
      }));
    }
  }, [turns]);

  const toggleRemaining = useCallback((name) => {
    setSelectedRemaining(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const selectAllRemaining = useCallback((checked) => {
    if (checked) setSelectedRemaining(new Set(remaining));
    else setSelectedRemaining(new Set());
  }, [remaining]);

  const assignSelected = useCallback(() => {
    if (selectedRemaining.size === 0) return;
    const toAssign = remaining.filter(n => selectedRemaining.has(n));
    const rest = remaining.filter(n => !selectedRemaining.has(n));
    setTurns(prev => prev.map((t, i) => i === bulkTarget ? [...t, ...toAssign] : t));
    setRemaining(rest);
    setSelectedRemaining(new Set());
  }, [remaining, selectedRemaining, bulkTarget]);

  const exportCSV = useCallback(() => {
    if (turns.length === 0) return;
    const maxLen = Math.max(...turns.map(t => t.length));
    let csv = turns.map((_, i) => `Turno ${i + 1}`).join(',') + '\n';
    for (let r = 0; r < maxLen; r++) {
      csv += turns.map(t => t[r] || '').join(',') + '\n';
    }
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'turni.csv';
    a.click();
    URL.revokeObjectURL(url);
  }, [turns]);

  const copyResult = useCallback(() => {
    if (turns.length === 0) return;
    const text = turns.map((t, i) => `Turno ${i + 1}: ${t.join(', ')}`).join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [turns]);

  const downloadRemaining = useCallback(() => {
    if (remaining.length === 0) return;
    const csv = 'Nome\n' + remaining.join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rimanenti.csv';
    a.click();
    URL.revokeObjectURL(url);
  }, [remaining]);

  const updatePerTurnCustom = useCallback((idx, val) => {
    setPerTurnCustom(prev => {
      const next = [...prev];
      next[idx] = parseInt(val) || 1;
      return next;
    });
  }, []);

  const totalAssigned = turns.reduce((s, t) => s + t.length, 0);

  return (
    <section className="section">
      <div className="container">
        <FadeContent blur duration={800}>
          <div className="section-header">
            <span className="badge">Generatore di turni</span>
            <h1 className="section-title">Genera turni per le interrogazioni</h1>
            <p className="section-subtitle">
              Carica un file CSV <strong>(separato da virgole)</strong>, scegli il numero di turni e quante
              persone vuoi per ogni turno. Puoi spostare i singoli studenti tra i turni cliccando sui nomi.
            </p>
          </div>
        </FadeContent>

        <div className="turni-layout">
          {/* Left column */}
          <div className="turni-col">
            <div className="card">
              <label htmlFor="fileInput" className="badge">1) Seleziona CSV</label>
              <input
                id="fileInput"
                type="file"
                accept=".csv,text/csv"
                onChange={handleFile}
                className="turni-file-input"
              />
              <small className="turni-hint">
                {fileName || 'Nessun file caricato'}
              </small>

              <div className="turni-spacer" />

              <label className="badge">2) Impostazioni turni</label>
              <div className="turni-settings">
                <div className="turni-field">
                  <span className="turni-field-label">Turni</span>
                  <input
                    type="number"
                    min="1"
                    value={numTurns}
                    onChange={e => {
                      setNumTurns(parseInt(e.target.value) || 1);
                      setPerTurnCustom([]);
                    }}
                    className="turni-input turni-input--small"
                  />
                </div>
                <div className="turni-field">
                  <span className="turni-field-label">Persone per turno (base)</span>
                  <input
                    type="number"
                    min="1"
                    value={perTurn}
                    onChange={e => setPerTurn(parseInt(e.target.value) || 1)}
                    className="turni-input turni-input--medium"
                  />
                </div>
                <label className="turni-checkbox-label">
                  <input
                    type="checkbox"
                    checked={doShuffle}
                    onChange={e => setDoShuffle(e.target.checked)}
                  />
                  Mescola i nomi
                </label>
              </div>

              <div className="turni-per-turn-details">
                <span className="turni-field-label">Dettaglio persone per turno</span>
                <div className="turni-per-turn-list">
                  {Array.from({ length: numTurns }, (_, i) => (
                    <div key={i} className="turni-per-turn-item">
                      <span>Turno {i + 1}:</span>
                      <input
                        type="number"
                        min="1"
                        value={perTurnValues[i]}
                        onChange={e => updatePerTurnCustom(i, e.target.value)}
                        className="turni-input turni-input--tiny"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="turni-spacer" />

              <div className="cta-group">
                <button className="button" onClick={generate} disabled={students.length === 0}>
                  Genera turni
                </button>
                <button className="button turni-btn-secondary" onClick={clear}>
                  Pulisci
                </button>
              </div>
            </div>

            {/* Preview */}
            <div className="card turni-mt">
              <h3>Anteprima studenti ({students.length})</h3>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr><th>#</th><th>Nome</th></tr>
                  </thead>
                  <tbody>
                    {students.length === 0 ? (
                      <tr><td colSpan="2" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Carica un CSV</td></tr>
                    ) : students.map((s, i) => (
                      <tr key={i}><td>{i + 1}</td><td>{s}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions */}
            <div className="card turni-mt">
              <h3>Azioni</h3>
              <div className="turni-actions-row">
                <button className="button" onClick={exportCSV} disabled={turns.length === 0}>
                  Esporta CSV
                </button>
                <button className="button" onClick={copyResult} disabled={turns.length === 0}>
                  {copied ? '✅ Copiato!' : 'Copia'}
                </button>
                <button className="button" onClick={downloadRemaining} disabled={remaining.length === 0}>
                  Scarica rimanenti
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="turni-col">
            <div className="card">
              <h3>Risultato</h3>
              <p className="turni-note">
                Clicca sul nome di uno studente per spostarlo in un altro turno.
              </p>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr><th>Turno</th><th>Studenti</th></tr>
                  </thead>
                  <tbody>
                    {turns.length === 0 ? (
                      <tr><td colSpan="2" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Genera turni prima</td></tr>
                    ) : turns.map((t, ti) => (
                      <tr key={ti}>
                        <td><strong>Turno {ti + 1}</strong></td>
                        <td>
                          <div className="turni-student-list">
                            {t.map((name, si) => (
                              <button
                                key={si}
                                className="turni-student-chip"
                                onClick={() => moveStudent(ti, si)}
                                title="Clicca per spostare"
                              >
                                {name}
                              </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {turns.length > 0 && (
                <div className="turni-summary">
                  {totalAssigned} assegnati · {remaining.length} rimanenti · {students.length} totale
                </div>
              )}
            </div>

            {/* Remaining */}
            <div className="card turni-mt">
              <h3>Rimanenti ({remaining.length})</h3>
              {remaining.length > 0 && (
                <div className="turni-remaining-controls">
                  <label className="turni-field-label">Assegna selezionati a:</label>
                  <select
                    value={bulkTarget}
                    onChange={e => setBulkTarget(parseInt(e.target.value))}
                    className="turni-select"
                  >
                    {turns.map((_, i) => (
                      <option key={i} value={i}>Turno {i + 1}</option>
                    ))}
                  </select>
                  <button
                    className="button"
                    onClick={assignSelected}
                    disabled={selectedRemaining.size === 0}
                  >
                    Assegna selezionati
                  </button>
                  <label className="turni-checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedRemaining.size === remaining.length && remaining.length > 0}
                      onChange={e => selectAllRemaining(e.target.checked)}
                    />
                    Seleziona tutti
                  </label>
                </div>
              )}
              <div className="turni-remaining-list">
                {remaining.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {turns.length > 0 ? 'Tutti assegnati!' : 'Nessun rimanente'}
                  </p>
                ) : remaining.map((name, i) => (
                  <label key={i} className="turni-remaining-item">
                    <input
                      type="checkbox"
                      checked={selectedRemaining.has(name)}
                      onChange={() => toggleRemaining(name)}
                    />
                    {name}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
