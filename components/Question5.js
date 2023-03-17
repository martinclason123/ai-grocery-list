import React, { useState, useEffect } from "react";

const Question5 = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchText, setSearchText] = useState(value);

  const popularDiets = [
    "Keto",
    "Atkins",
    "South Beach",
    "Paleo",
    "Mediterranean",
    "Vegan",
    "Vegetarian",
    "DASH",
    "Intermittent Fasting",
    "Whole30",
    "Low Carb",
    "Low Fat",
    "Flexible Dieting (IIFYM)",
  ];

  useEffect(() => {
    if (searchText) {
      const filteredDiets = popularDiets.filter((diet) =>
        diet.toLowerCase().startsWith(searchText.toLowerCase())
      );
      setSuggestions(filteredDiets);
    } else {
      setSuggestions([]);
    }
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    onChange(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <h3>Are you following any diet plans?</h3>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        onBlur={() => setSuggestions([])}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Question5;
