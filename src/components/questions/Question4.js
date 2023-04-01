import React, { useEffect, useRef, useState } from "react";
import {
  QuestionContainer,
  Question,
  CheckBoxContainer,
  CheckBoxLabel,
  QuestionCheckbox,
  CustomCheckbox,
  CheckedCustomCheckbox,
} from "@/styles/QuestionStyles";

const Question4 = ({ onFormDataChange, value }) => {
  const inputRef = useRef();

  const [priorities, setPriorities] = useState(value || []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    let updatedPriorities;
    if (checked) {
      updatedPriorities = [...priorities, value];
    } else {
      updatedPriorities = priorities.filter((priority) => priority !== value);
    }
    setPriorities(updatedPriorities);
    onFormDataChange(updatedPriorities);
  };

  const priorityList = [
    "Easy preparation",
    "Low calorie",
    "Tasty",
    "kid-friendly",
    "Healthy",
    "Cheap",
    "Variety ",
  ];
  return (
    <QuestionContainer>
      <Question>Choose your meal plan priorities</Question>
      {priorityList.map((priority, index) => (
        <CheckBoxContainer key={index}>
          <QuestionCheckbox
            ref={index === 0 ? inputRef : null}
            type="checkbox"
            value={priority}
            id={`priority-${index}`}
            onChange={handleChange}
            checked={priorities.includes(priority)}
          />
          {priorities.includes(priority) ? (
            <CheckedCustomCheckbox
              htmlFor={`priority-${index}`}
            ></CheckedCustomCheckbox>
          ) : (
            <CustomCheckbox htmlFor={`priority-${index}`}></CustomCheckbox>
          )}
          <CheckBoxLabel htmlFor={`priority-${index}`}>
            {priority}
          </CheckBoxLabel>
        </CheckBoxContainer>
      ))}
    </QuestionContainer>
  );
};

export default Question4;
