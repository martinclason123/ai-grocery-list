import React, { useState, useEffect } from "react";
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
  const urlParams = new URLSearchParams(window.location.search);
  const initialCurrentStep =
    Number(localStorage.getItem("currentStep")) ||
    Number(urlParams.get("step")) ||
    0;
  const initialFormData = JSON.parse(localStorage.getItem("formData")) || {
    adults: "",
    children: "",
    store: "",
    priorities: [],
    restrictions: [],
    meals: [],
    days: "",
  };

  const [currentStep, setCurrentStep] = useState(initialCurrentStep);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
    localStorage.setItem("formData", JSON.stringify(formData));

    // Update the URL with the current step
    const newUrl = new URL(window.location);
    newUrl.searchParams.set("step", currentStep);
    window.history.replaceState({}, "", newUrl.toString());
  }, [currentStep, formData]);

  const handleFormDataChange = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  const goToPreviousStep = () => {
    if (isFormComplete) {
      setCurrentStep(Questions.length - 1);
    } else if (currentStep > 0) {
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
        <ConfirmationPage
          formData={formData}
          onBackButtonClick={goToPreviousStep}
        />
      ) : (
        <>
          <CurrentQuestion
            onFormDataChange={(value) =>
              handleFormDataChange(currentQuestionKey, value)
            }
            value={formData[currentQuestionKey]}
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
