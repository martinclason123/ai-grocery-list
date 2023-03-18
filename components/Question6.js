import React, { useState } from "react";
import styled from "styled-components";
import { QuestionContainer, QuestionHeading, NextButton } from "./sharedStyles";

const commonAllergies = [
  "Peanuts",
  "Tree nuts",
  "Milk",
  "Eggs",
  "Wheat",
  "Soy",
  "Fish",
  "Shellfish",
];

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledCheckbox = styled.input`
  margin-right: 8px;
`;

const AddAllergyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AddAllergyInput = styled.input`
  font-size: 1rem;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const AddAllergyButton = styled.button`
  font-size: 1rem;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #f1f1f1;
  color: #4285f4;
  border: 1px solid #4285f4;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #4285f4;
    color: white;
  }
`;
const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: #999;
  max-width: 80%;
  text-align: center;
  margin-top: 20px;
`;

const Question6 = ({ value, onValueChange, onNext }) => {
  const [customAllergy, setCustomAllergy] = useState("");

  const handleChange = (event) => {
    if (event.target.checked) {
      onValueChange([...(value || []), event.target.value]);
    } else {
      onValueChange(value.filter((allergy) => allergy !== event.target.value));
    }
  };

  const handleReady = () => {
    if (value && value.length > 0) {
      onNext(value);
    } else {
      alert("Please select at least one food allergy.");
    }
  };

  const handleAddAllergy = () => {
    if (customAllergy) {
      onValueChange([...(value || []), customAllergy]);
      setCustomAllergy("");
    }
  };

  return (
    <QuestionContainer>
      <QuestionHeading>Do you have any food allergies?</QuestionHeading>
      {commonAllergies.map((allergy, index) => (
        <CheckboxContainer key={index}>
          <StyledCheckbox
            type="checkbox"
            id={`allergy-${index}`}
            value={allergy}
            checked={value ? value.includes(allergy) : false}
            onChange={handleChange}
          />
          <label htmlFor={`allergy-${index}`}>{allergy}</label>
        </CheckboxContainer>
      ))}
      {value &&
        value
          .filter((allergy) => !commonAllergies.includes(allergy))
          .map((allergy, index) => (
            <CheckboxContainer key={`custom-${index}`}>
              <StyledCheckbox
                type="checkbox"
                id={`custom-allergy-${index}`}
                value={allergy}
                checked={true}
                onChange={handleChange}
              />
              <label htmlFor={`custom-allergy-${index}`}>{allergy}</label>
            </CheckboxContainer>
          ))}
      <AddAllergyContainer>
        <AddAllergyInput
          type="text"
          placeholder="Other"
          value={customAllergy}
          onChange={(e) => setCustomAllergy(e.target.value)}
        />
        <AddAllergyButton onClick={handleAddAllergy}>
          Add allergy
        </AddAllergyButton>
      </AddAllergyContainer>
      <Disclaimer>
        The information provided by this application is for general
        informational purposes only. We have made efforts to ensure the accuracy
        and completeness of the information, but we cannot guarantee that the
        information provided is up-to-date, comprehensive, or suitable for your
        specific needs. We are not responsible for any allergic reactions or
        other health issues that may arise due to the use of this application.
        Please consult a healthcare professional before making any decisions
        related to your diet and allergies.
      </Disclaimer>
      <NextButton onClick={handleReady}>Next</NextButton>
    </QuestionContainer>
  );
};

export default Question6;
