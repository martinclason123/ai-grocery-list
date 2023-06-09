import React, { useEffect, useRef, useState } from "react";
import {
  QuestionContainer,
  Question,
  CheckBoxContainer,
  CheckBoxLabel,
  CustomCheckbox,
  CheckedCustomCheckbox,
  QuestionRadio,
} from "@/styles/QuestionStyles";

const Question7 = ({ onFormDataChange, value }) => {
  const inputRef = useRef();

  const [selectedDay, setSelectedDay] = useState(value || "");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDay(value);
      onFormDataChange(value);
    }
  };

  const daysList = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <QuestionContainer>
      <Question>How many days should this plan account for?</Question>
      {daysList.map((day, index) => (
        <CheckBoxContainer key={index}>
          <QuestionRadio
            ref={index === 0 ? inputRef : null}
            type="radio"
            value={day}
            id={`day-${index}`}
            onChange={handleChange}
            checked={selectedDay === day}
            name="days"
          />
          {selectedDay === day ? (
            <CheckedCustomCheckbox
              htmlFor={`day-${index}`}
            ></CheckedCustomCheckbox>
          ) : (
            <CustomCheckbox htmlFor={`day-${index}`}></CustomCheckbox>
          )}
          <CheckBoxLabel htmlFor={`day-${index}`}>{day}</CheckBoxLabel>
        </CheckBoxContainer>
      ))}
    </QuestionContainer>
  );
};

export default Question7;
