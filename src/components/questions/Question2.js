import React, { useEffect, useRef } from "react";
import {
  QuestionContainer,
  Question,
  AnswerInput,
} from "@/styles/QuestionStyles";

const Question2 = ({ onFormDataChange, value }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    onFormDataChange(event.target.value);
  };

  return (
    <QuestionContainer>
      <Question>Question 2</Question>
      <AnswerInput
        ref={inputRef}
        type="number"
        min="1"
        step="1"
        onChange={handleChange}
        value={value || ""}
      />
    </QuestionContainer>
  );
};

export default Question2;
