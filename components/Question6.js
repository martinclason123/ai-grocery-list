import React, { useState } from "react";

const commonAllergies = [
  "Peanuts",
  "Tree nuts",
  "Milk",
  "Eggs",
  "Wheat",
  "Soy",
  "Fish",
  "Shellfish",
];

const Question6 = ({ value, onChange }) => {
  const [otherAllergies, setOtherAllergies] = useState([]);

  const handleCheckboxChange = (e) => {
    const allergy = e.target.value;
    if (e.target.checked) {
      onChange([...value, allergy]);
    } else {
      onChange(value.filter((item) => item !== allergy));
    }
  };

  const handleAddOtherAllergy = () => {
    setOtherAllergies([...otherAllergies, ""]);
  };

  const handleOtherAllergyChange = (index, newValue) => {
    const updatedOtherAllergies = otherAllergies.map((allergy, idx) =>
      idx === index ? newValue : allergy
    );
    setOtherAllergies(updatedOtherAllergies);
  };

  const handleOtherAllergyBlur = () => {
    onChange([...value, ...otherAllergies.filter((allergy) => allergy.trim())]);
  };

  return (
    <div>
      <h3>Do you have any food allergies?</h3>
      {commonAllergies.map((allergy, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`allergy-${index}`}
            value={allergy}
            checked={value.includes(allergy)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`allergy-${index}`}>{allergy}</label>
        </div>
      ))}
      <h4>Other allergies:</h4>
      {otherAllergies.map((allergy, index) => (
        <input
          key={index}
          type="text"
          value={allergy}
          onChange={(e) => handleOtherAllergyChange(index, e.target.value)}
          onBlur={handleOtherAllergyBlur}
        />
      ))}
      <button type="button" onClick={handleAddOtherAllergy}>
        Add another allergy
      </button>
      <p>
        <small>
          * The creator of this app is not responsible for any allergic
          reactions you may have due to the food you purchase from this list. By
          continuing, you agree to this disclaimer.
        </small>
      </p>
    </div>
  );
};

export default Question6;
