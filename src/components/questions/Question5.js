import React, { useEffect, useRef, useState } from "react";
import {
  QuestionContainer,
  Question,
  CheckBoxContainer,
  CheckBoxLabel,
  AddButton,
} from "@/styles/QuestionStyles";

const Question5 = ({ onFormDataChange, value }) => {
  const inputRef = useRef();
  const otherRef = useRef();

  const [restricted, setRestricted] = useState(value || []);
  const [other, setOther] = useState("");
  const [restrictedList, setRestrictedList] = useState([
    "Eggs",
    "Dairy",
    "Shellfish",
    "Peanuts",
  ]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setRestricted([...restricted, value]);
    } else {
      setRestricted(restricted.filter((restriction) => restriction !== value));
    }
    onFormDataChange([...restricted, value]);
  };

  const handleOtherChange = (event) => {
    setOther(event.target.value);
  };

  const handleAddOther = () => {
    if (other.trim()) {
      setRestrictedList([...restrictedList, other]);
      setRestricted([...restricted, other]);
      onFormDataChange([...restricted, other]);
      setOther("");
    }
  };

  return (
    <QuestionContainer>
      <Question>Question 5</Question>
      {restrictedList.map((restriction, index) => (
        <CheckBoxContainer key={index}>
          <input
            ref={index === 0 ? inputRef : null}
            type="checkbox"
            value={restriction}
            id={`restriction-${index}`}
            onChange={handleChange}
            checked={restricted.includes(restriction)}
          />
          <CheckBoxLabel htmlFor={`restriction-${index}`}>
            {restriction}
          </CheckBoxLabel>
        </CheckBoxContainer>
      ))}
      <CheckBoxContainer>
        <input
          ref={otherRef}
          type="text"
          placeholder="Other"
          value={other}
          onChange={handleOtherChange}
        />
        <AddButton onClick={handleAddOther}>Add</AddButton>
      </CheckBoxContainer>
    </QuestionContainer>
  );
};

export default Question5;
