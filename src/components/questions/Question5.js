import React, { useEffect, useRef, useState } from "react";
import {
  QuestionContainer,
  Question,
  CheckBoxContainer,
  CheckBoxLabel,
  AddButton,
  AllergyInput,
  AddAllergyContainer,
  CustomCheckbox,
  CheckedCustomCheckbox,
  QuestionCheckbox,
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
    "gluten",
  ]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    let updatedRestricted;
    if (checked) {
      updatedRestricted = [...restricted, value];
    } else {
      updatedRestricted = restricted.filter(
        (restriction) => restriction !== value
      );
    }
    setRestricted(updatedRestricted);
    onFormDataChange(updatedRestricted);
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
      <Question>
        Select or add any allergies or restrictions you have *.{" "}
      </Question>
      {restrictedList.map((restriction, index) => (
        <CheckBoxContainer key={index}>
          <QuestionCheckbox
            ref={index === 0 ? inputRef : null}
            type="checkbox"
            value={restriction}
            id={`restriction-${index}`}
            onChange={handleChange}
            checked={restricted.includes(restriction)}
          />
          {restricted.includes(restriction) ? (
            <CheckedCustomCheckbox
              htmlFor={`restriction-${index}`}
            ></CheckedCustomCheckbox>
          ) : (
            <CustomCheckbox htmlFor={`restriction-${index}`}></CustomCheckbox>
          )}
          <CheckBoxLabel htmlFor={`restriction-${index}`}>
            {restriction}
          </CheckBoxLabel>
        </CheckBoxContainer>
      ))}
      <AddAllergyContainer>
        <AllergyInput
          ref={otherRef}
          type="text"
          placeholder="Other"
          value={other}
          onChange={handleOtherChange}
        />
        <AddButton onClick={handleAddOther}>Add</AddButton>
      </AddAllergyContainer>
    </QuestionContainer>
  );
};

export default Question5;
