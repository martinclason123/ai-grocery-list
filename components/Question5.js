import React, { useState, useRef, useEffect } from "react";
import {
  QuestionContainer,
  QuestionHeading,
  StyledInput,
  SuggestedOption,
  NextButton,
} from "./sharedStyles";

const Question5 = ({ value, onChange, onNext, onBack }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [suggestedOptions, setSuggestedOptions] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length >= 3) {
      setSuggestedOptions(
        popularDiets.filter((diet) =>
          diet.toLowerCase().startsWith(event.target.value.toLowerCase())
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

  const handleNext = () => {
    if (inputValue.length >= 3) {
      onChange(inputValue);
      onNext();
    } else {
      alert("Please enter at least 3 characters.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      onBack();
    }
  };

  return (
    <QuestionContainer>
      <QuestionHeading>Are you following any diet plans?</QuestionHeading>
      <StyledInput
        type="text"
        value={inputValue}
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div>
        {suggestedOptions.map((option, index) => (
          <SuggestedOption
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </SuggestedOption>
        ))}
      </div>
      <NextButton onClick={handleNext}>Next</NextButton>
    </QuestionContainer>
  );
};

export default Question5;
