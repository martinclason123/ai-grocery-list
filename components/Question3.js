import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const SuggestedOption = styled.div`
  cursor: pointer;
  margin-bottom: 5px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 4px 8px;
  border-radius: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

const NextButton = styled.button`
  font-size: 1rem;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #f1f1f1;
  color: #4285f4;
  border: 1px solid #4285f4;
  border-radius: 4px;
  margin-top: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #4285f4;
    color: white;
  }
`;

const Question3 = ({ value, onChange, onNext, onBack }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [suggestedOptions, setSuggestedOptions] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
      <QuestionHeading>
        What is the grocery store the shopper will be using?
      </QuestionHeading>
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

export default Question3;
