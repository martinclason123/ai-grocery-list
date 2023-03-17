import React from "react";

const mealOptions = [
  "Breakfast",
  "Morning snack",
  "Lunch",
  "Afternoon snack",
  "Dinner",
  "Evening snack",
];

const Question8 = ({ value, onChange }) => {
  const handleChange = (e) => {
    const meal = e.target.value;
    if (e.target.checked) {
      onChange([...value, meal]);
    } else {
      onChange(value.filter((item) => item !== meal));
    }
  };

  return (
    <div>
      <h3>What meals should the plan include?</h3>
      {mealOptions.map((meal, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`meal-${index}`}
            value={meal}
            checked={value.includes(meal)}
            onChange={handleChange}
          />
          <label htmlFor={`meal-${index}`}>{meal}</label>
        </div>
      ))}
    </div>
  );
};

export default Question8;
