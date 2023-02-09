import React, { useState } from "react";
import styles from './form3.module.css';


const ElectricCurrentConverter = () =>{
    const [current, setCurrent] = useState(0);
    const [milliamperes, setMilliamperes] = useState(0);
    const [amperes, setAmperes] = useState(0);
    const [kiloamperes, setKiloamperes] = useState(0);
  
    const handleCurrentChange = (event) => {
      setCurrent(event.target.value);
      setMilliamperes(event.target.value * 1000);
      setAmperes(event.target.value);
      setKiloamperes(event.target.value / 1000);
    };

    return (
        <div className={styles.wrapper}>
            <h1>
                Electric Current Converter
            </h1>
          <form className={styles.forms}>
            <div>
              <label className={styles.row}>
                Current (A):
                <input
                  type="number"
                  value={current}
                  onChange={handleCurrentChange}
                />
              </label>
            </div>
            <div>
              <label className={styles.result}>
                Milliamperes (mA): {Number(milliamperes).toFixed(2)}
              </label>
            </div>
            <div>
              <label className={styles.result}>Amperes (A): {Number(amperes).toFixed(2)}</label>
            </div>
            <div>
              <label className={styles.result}>
                Kiloamperes (kA): {Number(kiloamperes).toFixed(2)}
              </label>
            </div>
          </form>
        </div>
      );
}
  
export default ElectricCurrentConverter;