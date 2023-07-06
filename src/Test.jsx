import React from "react";
import { FaCopy } from "react-icons/fa";
const Test = () => {
  return (
    <div className="main">
      <div className="content">
        <h1>ShortCut.ai</h1>
        <p>
          <span className="description">
            Most link shorteners do too much. This one just makes your links
            shorter.
          </span>
        </p>
        <div className="input-container">
          <input
            type="text"
            className="wide-input"
            name=""
            id=""
            placeholder="Place your links here"
          />
          <button className="input-button">Submit</button>
        </div>

        <div>
          <div className="result">
            <FaCopy className="FaCopy" />
          </div>
        </div>

        {/* <input className="input" type="text" name="" id="" placeholder="Place you links here" /> */}
      </div>
    </div>
  );
};

export default Test;
