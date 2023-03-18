import React, { useRef, useEffect } from "react";
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

const Question2 = ({ value, onChange, onNext, onBack }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      onChange(newValue);
    } else {
      onChange("");
    }
  };

  const handleNext = () => {
    if (value !== null) {
      onNext();
    } else {
      alert("Please enter a valid number.");
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
        How many children will this plan need to feed?
      </QuestionHeading>
      <StyledInput
        type="number"
        min="0"
        step="1"
        value={value}
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <NextButton onClick={handleNext}>Next</NextButton>
    </QuestionContainer>
  );
};

export default Question2;
