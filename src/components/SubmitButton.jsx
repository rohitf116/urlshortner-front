import React from "react";

const SubmitButton = ({ onSubmitHandle, url }) => {
  return (
    <div>
      <button className="input-button" onClick={() => onSubmitHandle(url)}>
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
