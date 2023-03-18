import React from "react";
import styled from "styled-components";
import { QuestionContainer, QuestionHeading, NextButton } from "./sharedStyles";

const mealOptions = [
  "Breakfast",
  "Morning snack",
  "Lunch",
  "Afternoon snack",
  "Dinner",
  "Evening snack",
];

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledCheckbox = styled.input`
  margin-right: 8px;
`;

const Question8 = ({ value, onChange, onNext, onBack }) => {
  const handleChange = (e) => {
    const meal = e.target.value;
    if (e.target.checked) {
      onChange([...(value || []), meal]);
    } else {
      onChange(value.filter((item) => item !== meal));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      onNext();
    } else if (e.key === "ArrowLeft") {
      onBack();
    }
  };

  const handleNext = () => {
    if (value && value.length > 0) {
      onNext();
    } else {
      alert("Please select at least one meal.");
    }
  };

  return (
    <QuestionContainer onKeyDown={handleKeyDown}>
      <QuestionHeading>What meals should the plan include?</QuestionHeading>
      {mealOptions.map((meal, index) => (
        <CheckboxContainer key={index}>
          <StyledCheckbox
            type="checkbox"
            id={`meal-${index}`}
            value={meal}
            checked={value ? value.includes(meal) : false}
            onChange={handleChange}
          />
          <label htmlFor={`meal-${index}`}>{meal}</label>
        </CheckboxContainer>
      ))}
      <NextButton onClick={handleNext}>Next</NextButton>
    </QuestionContainer>
  );
};

export default Question8;
