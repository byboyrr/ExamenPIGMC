import React, { useState } from "react";
import styles from './form1.module.css';

export const Form1 = () => {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [score, setScore] = useState(0);

  const handleQuestion1Change = (e) => {
    setQuestion1(e.target.value);
  };

  const handleQuestion2Change = (e) => {
    setQuestion2(e.target.value);
  };

  const handleQuestion3Change = (e) => {
    setQuestion3(e.target.value);
  };

  const handleQuestion4Change = (e) => {
    setQuestion4(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setScore(0);
    let totalScore = 0;
    if (question1 === "I=q/Δt") {
        totalScore =totalScore+1;
    }
    if (question2 === "deplasarea") {
        totalScore =totalScore+1;
    }
    if (question3 === "electronii") {
        totalScore =totalScore+1;
    }
    if (question4 === "sarcina electrica") {
        totalScore =totalScore+1;
    }
    setScore(totalScore);
  };
  return (
    <div className={styles.wrapper}>
      <h1>Electric Current Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>1. Formula corectă este ... .</p>
          <input
            type="radio"
            id="question1-option1"
            value="q=I·Δt"
            checked={question1 === "q=I·Δt"}
            onChange={handleQuestion1Change}
          />
          <label htmlFor="question1-option1">q=I·Δt</label>
          <br />
          <input
            type="radio"
            id="question1-option2"
            value="∆t=I·q"
            checked={question1 === "∆t=I·q"}
            onChange={handleQuestion1Change}
          />
          <label htmlFor="question1-option2">∆t=I·q</label>
          <br />
          <input
            type="radio"
            id="question1-option3"
            value="q=I/Δt"
            checked={question1 === "q=I/Δt"}
            onChange={handleQuestion1Change}
          />
          <label htmlFor="question1-option3">q=I/Δt</label>
          <br />
          <input
            type="radio"
            id="question1-option4"
            value="I=q/Δt"
            checked={question1 === "I=q/Δt"}
            onChange={handleQuestion1Change}
          />
          <label htmlFor="question1-option4">I=q/Δt</label>
        </div>

        <br />
        <div>
          <p>2. Curentul electric este ... ordonată a purtătorilor de sarcină electrică.</p>
          <input
            type="radio"
            id="question2-option1"
            value="deplasarea"
            checked={question2 === "deplasarea"}
            onChange={handleQuestion2Change}
          />
          <label htmlFor="question2-option1">deplasarea</label>
          <br />
          <input
            type="radio"
            id="question2-option2"
            value="transformarea"
            checked={question2 === "transformarea"}
            onChange={handleQuestion2Change}
          />
          <label htmlFor="question2-option2">transformarea</label>
          <br />
          <input
            type="radio"
            id="question2-option3"
            value="schimbarea"
            checked={question2 === "schimbarea"}
            onChange={handleQuestion2Change}
          />
          <label htmlFor="question2-option3">schimbarea</label>
          <br />
          <input
            type="radio"
            id="question2-option4"
            value="transferarea"
            checked={question2 === "transferarea"}
            onChange={handleQuestion2Change}
          />
          <label htmlFor="question2-option4">transferarea</label>
        </div>
        <br />

        <div>
          <p>3. Purtătorii de sarcină electrică, în cazul fulgerelor sunt ... .</p>
          <input
            type="radio"
            id="question3-option1"
            value="ionii"
            checked={question3 === "ionii"}
            onChange={handleQuestion3Change}
          />
          <label htmlFor="question3-option1">ionii</label>
          <br />
          <input
            type="radio"
            id="question3-option2"
            value="electronii"
            checked={question3 === "electronii"}
            onChange={handleQuestion3Change}
          />
          <label htmlFor="question3-option2">electronii</label>
          <br />
          <input
            type="radio"
            id="question3-option3"
            value="atomii"
            checked={question3 === "atomii"}
            onChange={handleQuestion3Change}
          />
          <label htmlFor="question3-option3">atomii</label>
          <br />
          <input
            type="radio"
            id="question3-option4"
            value="moleculele"
            checked={question3 === "moleculele"}
            onChange={handleQuestion3Change}
          />
          <label htmlFor="question3-option4">moleculele</label>
        </div>
        <br />

        <div>
          <p>4. Intensitatea curentului electric este mărimea fizică care exprimă ... transportată în unitatea de timp.</p>
          <input
            type="radio"
            id="question4-option1"
            value="miscarea"
            checked={question4 === "miscarea"}
            onChange={handleQuestion4Change}
          />
          <label htmlFor="question4-option1">miscarea</label>
          <br />
          <input
            type="radio"
            id="question4-option2"
            value="cantitatea"
            checked={question4 === "cantitatea"}
            onChange={handleQuestion4Change}
          />
          <label htmlFor="question4-option2">cantitatea</label>
          <br />
          <input
            type="radio"
            id="question4-option3"
            value="sarcina electrica"
            checked={question4 === "sarcina electrica"}
            onChange={handleQuestion4Change}
          />
          <label htmlFor="question4-option3">sarcina electrica</label>
        </div>
        <br />
        <button type="submit" disabled={!(question1!=='' && question2!=='' && question3!=='' && question4!=='')}>
            Submit
        </button>
      </form>
      <p> Final score: {25*score}%</p>
    </div>
  )
}
    