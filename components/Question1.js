import React from "react";

const Question1 = ({ value, onChange }) => {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      onChange(newValue);
    } else {
      onChange("");
    }
  };

  return (
    <div>
      <h3>How many adults will this plan need to feed?</h3>
      <input
        type="number"
        min="1"
        step="1"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Question1;
