import React, { useEffect, useRef } from "react";
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

const Question1 = ({ value, onChange, onNext, onBack }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      onChange(newValue);
    } else {
      onChange("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onNext();
    } else if (e.key === "ArrowRight") {
      onNext();
    } else if (e.key === "ArrowLeft") {
      onBack();
    }
  };

  return (
    <QuestionContainer onKeyDown={handleKeyDown}>
      <QuestionHeading>
        How many adults will this plan need to feed?
      </QuestionHeading>
      <StyledInput
        ref={inputRef}
        type="number"
        min="1"
        step="1"
        value={value}
        onChange={handleChange}
      />
      <NextButton onClick={onNext}>Next</NextButton>
    </QuestionContainer>
  );
};

export default Question1;
