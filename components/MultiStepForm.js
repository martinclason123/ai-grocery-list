import React, { useState } from "react";

const MultiStepForm = ({ questions, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState(Array(questions.length).fill(null));
  const [formData, setFormData] = useState({
    adults: 1,
    children: 0,
    store: "",
    priorities: [], // Add this line
    diet: "",
    allergies: [],
    days: 1,
    meals: [],
  });
  const handleNext = (newValue, shouldMoveNext = true) => {
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[currentStep] = newValue;
      return newValues;
    });

    if (shouldMoveNext) {
      if (currentStep === questions.length - 1) {
        onComplete(values);
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const CurrentQuestion = questions[currentStep].component;

  return (
    <div>
      <h2>
        Step {currentStep + 1} of {questions.length}
      </h2>
      {currentStep === 3 ? (
        <CurrentQuestion
          value={formData.priorities}
          onNext={(newValue) => handleNext(newValue)}
          onValueChange={(newValue) => handleNext(newValue, false)}
        />
      ) : (
        <CurrentQuestion
          value={values[currentStep]}
          onChange={(newValue) => handleNext(newValue)}
        />
      )}

      {currentStep > 0 && <button onClick={handleBack}>Back</button>}
    </div>
  );
};

export default MultiStepForm;
