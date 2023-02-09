import React, { useState } from "react";
import styles from './form5.module.css';

const ElectricityBillCalculator = () => {
  const [consumedUnits, setConsumedUnits] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [unitMeasurement, setUnitMeasurement] = useState("kWh");

  const handleConsumedUnitsChange = (e) => {
    setConsumedUnits(e.target.value);
  };

  const handleUnitMeasurementChange = (e) => {
    setUnitMeasurement(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const unitRate = 0.37;
    let bill;
    if (unitMeasurement === "kWh") {
      bill = consumedUnits * unitRate;
    } else if (unitMeasurement === "kW") {
      bill = consumedUnits * unitRate * 24;
    }
    setBillAmount(bill);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Electricity Bill Calculator</h1>
      <form onSubmit={handleSubmit} className={styles.forms}>
        <div className={styles.gaps}>
          <label htmlFor="consumed-units">Consumed Units:</label>
          <input
            type="number"
            id="consumed-units"
            value={consumedUnits}
            onChange={handleConsumedUnitsChange}
          />
          <select value={unitMeasurement} onChange={handleUnitMeasurementChange}>
            <option value="kWh">kWh</option>
            <option value="kW">kW</option>
          </select>
        </div>
        <button type="submit">Calculate</button>
      </form>
      <h2>
        Bill Amount: {billAmount.toFixed(2)} (calculated as consumed units * unit rate:
        {consumedUnits} {unitMeasurement} * {0.37} = {billAmount.toFixed(2)})
      </h2>
    </div>
  );
};

export default ElectricityBillCalculator;