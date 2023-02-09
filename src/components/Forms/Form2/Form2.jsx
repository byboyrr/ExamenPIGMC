import React, { useState } from "react";
import styles from './form2.module.css';

const AmpsToKilowatts = () => {
  const [amps, setAmps] = useState(0);
  const [kilowatts, setKilowatts] = useState(0);
  const [voltage, setVoltage] = useState(220);

  const handleAmpsChange = (event) => {
    setAmps(event.target.value);
    setKilowatts((event.target.value * voltage) / 1000);
  };

  const handleVoltageChange = (event) => {
    setVoltage(event.target.value);
    setKilowatts((amps * event.target.value) / 1000);
  };

  return (
    <div className={styles.wrapper}>
        <h1>
            Amps to killowat calculator
        </h1>
        <p> Formula: Kilowatts = (Amps * Voltage) / 1000</p>
      <form className={styles.forms}>
        <div >
          <label className={styles.row}>
            Amps:
            <input
              type="number"
              value={amps}
              onChange={handleAmpsChange}
            />
          </label>
        </div>
        <div >
          <label className={styles.row}>
            Voltage:
            <input
              type="number"
              value={voltage}
              onChange={handleVoltageChange}
            />
          </label>
        </div>
        <div>
          <label className={styles.result}>Kilowatts: {kilowatts.toFixed(2)}</label>
        </div>
      </form>
    </div>
  );
}

export default AmpsToKilowatts;