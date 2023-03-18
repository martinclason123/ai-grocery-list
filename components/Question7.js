import React from "react";
import styled from "styled-components";
import { QuestionContainer, QuestionHeading, NextButton } from "./sharedStyles";

const days = [1, 2, 3, 4, 5, 6, 7];

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledRadioButton = styled.input`
  margin-right: 8px;
`;

const Question7 = ({ value, onChange, onNext, onBack }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      onNext();
    } else if (e.key === "ArrowLeft") {
      onBack();
    }
  };

  return (
    <QuestionContainer onKeyDown={handleKeyDown}>
      <QuestionHeading>
        How many days should this meal plan cover?
      </QuestionHeading>
      {days.map((day, index) => (
        <RadioContainer key={index}>
          <StyledRadioButton
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
        </RadioContainer>
      ))}
      <NextButton onClick={onNext}>Next</NextButton>
    </QuestionContainer>
  );
};

export default Question7;
