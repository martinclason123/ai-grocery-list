import React, { useEffect, useRef, useState } from "react";
import {
  QuestionContainer,
  Question,
  CheckBoxContainer,
  CheckBoxLabel,
} from "@/styles/QuestionStyles";

const Question6 = ({ onFormDataChange, value }) => {
  const inputRef = useRef();

  const [meals, setMeals] = useState(value || []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setMeals([...meals, value]);
    } else {
      setMeals(meals.filter((priority) => priority !== value));
    }
    onFormDataChange([...meals, value]);
  };

  const priorityList = ["Breakfast", "Lunch", "Dinner"];
  return (
    <QuestionContainer>
      <Question>What meals would you like this plan to include?</Question>
      {priorityList.map((priority, index) => (
        <CheckBoxContainer key={index}>
          <input
            ref={index === 0 ? inputRef : null}
            type="checkbox"
            value={priority}
            id={`priority-${index}`}
            onChange={handleChange}
            checked={meals.includes(priority)}
          />
          <CheckBoxLabel htmlFor={`priority-${index}`}>
            {priority}
          </CheckBoxLabel>
        </CheckBoxContainer>
      ))}
    </QuestionContainer>
  );
};

export default Question6;
