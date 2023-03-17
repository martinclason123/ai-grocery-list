import React, { useState } from "react";

const Question3 = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [suggestedOptions, setSuggestedOptions] = useState([]);

  const groceryStores = [
    "Aldi",
    "Meijer",
    "Walmart",
    "Whole Foods Market",
    "Trader Joe's",
    "Kroger",
    "Publix",
    "Safeway",
    "Costco",
    "Sam's Club",
  ];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length >= 3) {
      setSuggestedOptions(
        groceryStores.filter((store) =>
          store.toLowerCase().startsWith(event.target.value.toLowerCase())
        )
      );
    } else {
      setSuggestedOptions([]);
    }
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setSuggestedOptions([]);
    onChange(option);
  };

  return (
    <div>
      <h3>What is the grocery store the shopper will be using?</h3>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <div>
        {suggestedOptions.map((option, index) => (
          <div key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </div>
        ))}
      </div>
      {inputValue.length >= 3 && (
        <button onClick={() => onChange(inputValue)}>Next</button>
      )}
    </div>
  );
};

export default Question3;
