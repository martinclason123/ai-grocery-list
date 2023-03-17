import React from "react";

const priorities = [
  "Affordable",
  "Healthy",
  "Cheap",
  "Tasty",
  "Fancy",
  "Easy preparation",
];

const Question4 = ({ value, onValueChange, onNext }) => {
  const handleChange = (event) => {
    if (event.target.checked) {
      onValueChange([...value, event.target.value]);
    } else {
      onValueChange(
        value.filter((priority) => priority !== event.target.value)
      );
    }
  };

  return (
    <div>
      <h3>
        What should be prioritized in this meal plan? Choose as many or few as
        you desire.
      </h3>
      {priorities.map((priority, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`priority-${index}`}
            value={priority}
            checked={value ? value.includes(priority) : false}
            onChange={handleChange}
          />
          <label htmlFor={`priority-${index}`}>{priority}</label>
        </div>
      ))}
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Question4;
