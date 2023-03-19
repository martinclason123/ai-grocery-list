import React, { useState } from "react";
import styled from "styled-components";

const MultiStepFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const StepHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  font-size: 1rem;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #f1f1f1;
  color: #4285f4;
  border: 1px solid #4285f4;
  border-radius: 4px;
  margin-top: 20px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #4285f4;
    color: white;
  }
`;

const MultiStepForm = ({ questions, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState(Array(questions.length).fill(null));

  const handleNext = (newValue) => {
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[currentStep] = newValue;
      return newValues;
    });

    if (currentStep === questions.length - 1) {
      onComplete(values);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const CurrentQuestion = questions[currentStep].component;

  return (
    <MultiStepFormContainer>
      <StepHeading>
        Step {currentStep + 1} of {questions.length}
      </StepHeading>
      <CurrentQuestion
        value={values[currentStep]}
        onChange={(newValue) => {
          setValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[currentStep] = newValue;
            return newValues;
          });
        }}
        onNext={handleNext}
        onBack={handleBack}
      />
      {currentStep > 0 && <BackButton onClick={handleBack}>Back</BackButton>}
    </MultiStepFormContainer>
  );
};

export default MultiStepForm;
