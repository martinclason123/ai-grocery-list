import React from "react";

const days = [1, 2, 3, 4, 5, 6, 7];

const Question7 = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h3>How many days should this meal plan cover?</h3>
      {days.map((day, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`day-${index}`}
            name="days"
            value={day}
            checked={value === day}
            onChange={handleChange}
          />
          <label htmlFor={`day-${index}`}>
            {day} day{day > 1 && "s"}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Question7;
