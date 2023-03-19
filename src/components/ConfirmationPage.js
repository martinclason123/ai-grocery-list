// src/components/ConfirmationPage.js
import React from "react";
import {
  ConfirmationContainer,
  QuestionAnswer,
  Question,
  Answer,
} from "@/styles/ConfirmationPageStyles";

const ConfirmationPage = ({ formData }) => {
  const formattedFormData = Object.entries(formData);

  return (
    <ConfirmationContainer>
      <h1>Confirmation</h1>
      {formattedFormData.map(([question, answer], index) => (
        <QuestionAnswer key={index}>
          <Question>{question}:</Question>
          <Answer>{JSON.stringify(answer)}</Answer>
        </QuestionAnswer>
      ))}
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
