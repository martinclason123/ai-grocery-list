import React, { useEffect, useRef, useState } from "react";
import {
  QuestionContainer,
  Question,
  CheckBoxContainer,
  CheckBoxLabel,
} from "@/styles/QuestionStyles";

const Question4 = ({ onFormDataChange, value }) => {
  const inputRef = useRef();

  const [priorities, setPriorities] = useState(value || []);

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
      <Question>
        Select one or more of your of your preferences for your meals.
      </Question>
      {priorityList.map((priority, index) => (
        <CheckBoxContainer key={index}>
          <input
            ref={index === 0 ? inputRef : null}
            type="checkbox"
            value={priority}
            id={`priority-${index}`}
            onChange={handleChange}
            checked={priorities.includes(priority)}
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