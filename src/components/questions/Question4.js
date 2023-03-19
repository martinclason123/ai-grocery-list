import React, { useEffect, useRef, useState } from "react";
import {
  QuestionContainer,
  Question,
  CheckBoxContainer,
  CheckBoxLabel,
} from "@/styles/QuestionStyles";

const Question4 = ({ onFormDataChange }) => {
  const inputRef = useRef();

  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setPriorities([...priorities, value]);
    } else {
      setPriorities(priorities.filter((priority) => priority !== value));
    }
    onFormDataChange([...priorities, value]);
  };

  const priorityList = ["Easy prep", "Healthy", "Cheap", "Variety"];
  return (
    <QuestionContainer>
      <Question>Question 4</Question>
      {priorityList.map((priority, index) => (
        <CheckBoxContainer key={index}>
          <input
            ref={index === 0 ? inputRef : null}
            type="checkbox"
            value={priority}
            id={`priority-${index}`}
            onChange={handleChange}
          />
          <CheckBoxLabel htmlFor={`priority-${index}`}>
            {priority}
          </CheckBoxLabel>
        </CheckBoxContainer>
      ))}
    </QuestionContainer>
  );
};

export default Question4;
