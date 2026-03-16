import { useState, useEffect } from 'react';

export default function ClockPage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <section className="clock-section">
      <div className="clock-box">
        Ora attuale: <span className="clock-time">{hours}:{minutes}:{seconds}</span>
      </div>
    </section>
  );
}
