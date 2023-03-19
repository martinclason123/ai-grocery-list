import React, { useState } from "react";
import * as QuestionComponents from "./questions";
import {
  FormContainer,
  FormNavigation,
  NavButton,
  ProgressBar,
  ProgressStep,
} from "@/styles/MultiStepFormStyles";

import ConfirmationPage from "./ConfirmationPage";
const Questions = Object.values(QuestionComponents);

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    adults: "",
    children: "",
    store: "",
    priorities: [],
    restrictions: [],
    meals: [],
    days: "",
  });

  const handleFormDataChange = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToNextStep = () => {
    if (currentStep < Questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const isNextStepDisabled = () => {
    const currentQuestionKey = Object.keys(formData)[currentStep];
    return formData[currentQuestionKey] === "";
  };

  const CurrentQuestion = Questions[currentStep];
  const currentQuestionKey = Object.keys(formData)[currentStep];

  const isFormComplete = currentStep === Questions.length;

  return (
    <FormContainer>
      <ProgressBar>
        {Questions.map((_, index) => (
          <ProgressStep key={index} active={index < currentStep} />
        ))}
      </ProgressBar>
      {isFormComplete ? (
        <ConfirmationPage formData={formData} />
      ) : (
        <>
          <CurrentQuestion
            onFormDataChange={(value) =>
              handleFormDataChange(currentQuestionKey, value)
            }
          />
          <FormNavigation>
            <NavButton onClick={goToPreviousStep}>Previous</NavButton>
            <NavButton onClick={goToNextStep} disabled={isNextStepDisabled()}>
              Next
            </NavButton>
          </FormNavigation>
        </>
      )}
    </FormContainer>
  );
};

export default MultiStepForm;
