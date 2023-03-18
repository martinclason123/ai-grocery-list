import React from "react";
import styled from "styled-components";
import { QuestionContainer, QuestionHeading, NextButton } from "./sharedStyles";

const priorities = [
  "Affordable",
  "Healthy",
  "Cheap",
  "Tasty",
  "Fancy",
  "Easy preparation",
];

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledCheckbox = styled.input`
  margin-right: 8px;
`;

const Question4 = ({ value, onValueChange, onNext }) => {
  const handleChange = (event) => {
    if (event.target.checked) {
      onValueChange([...(value || []), event.target.value]);
    } else {
      onValueChange(
        value.filter((priority) => priority !== event.target.value)
      );
    }
  };

  const handleReady = () => {
    if (value && value.length > 0) {
      onNext(value);
    } else {
      alert("Please select at least one priority.");
    }
  };

  return (
    <QuestionContainer>
      <QuestionHeading>
        What should be prioritized in this meal plan? Choose as many or few as
        you desire.
      </QuestionHeading>
      {priorities.map((priority, index) => (
        <CheckboxContainer key={index}>
          <StyledCheckbox
            type="checkbox"
            id={`priority-${index}`}
            value={priority}
            checked={value ? value.includes(priority) : false}
            onChange={handleChange}
          />
          <label htmlFor={`priority-${index}`}>{priority}</label>
        </CheckboxContainer>
      ))}
      <NextButton onClick={handleReady}>Next</NextButton>
    </QuestionContainer>
  );
};

export default Question4;
