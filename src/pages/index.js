import React, { useState } from "react";
import styled from "styled-components";
import MultiStepFormComponent from "../../components/MultiStepForm";
import Question1 from "../../components/Question1";
import Question2 from "../../components/Question2";
import Question3 from "../../components/Question3";
import Question4 from "../../components/Question4";
import Question5 from "../../components/Question5";
import Question6 from "../../components/Question6";
import Question7 from "../../components/Question7";
import Question8 from "../../components/Question8";
import Confirmation from "../../components/Confirmation";

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f1f1;
  font-family: Arial, sans-serif;
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const StyledSubHeading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const StyledCTAButton = styled.button`
  font-size: 1.5rem;
  padding: 12px 24px;
  cursor: pointer;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2a75d2;
  }
`;

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState([]);

  const handleFormCompletion = (values) => {
    setFormValues(values);
    setShowForm(false);
  };

  return (
    <div>
      {!showForm && !formValues.length && (
        <StyledLandingPage>
          <StyledHeading>Meal Plan Generator</StyledHeading>
          <StyledSubHeading>
            Discover the perfect meal plan tailored to your preferences.
          </StyledSubHeading>
          <StyledCTAButton onClick={() => setShowForm(true)}>
            Get Started
          </StyledCTAButton>
        </StyledLandingPage>
      )}
      {showForm && (
        <MultiStepFormComponent
          questions={[
            { component: Question1 },
            { component: Question2 },
            { component: Question3 },
            { component: Question4 },
            { component: Question5 },
            { component: Question6 },
            { component: Question7 },
            { component: Question8 },
          ]}
          onComplete={handleFormCompletion}
        />
      )}
      {formValues.length > 0 && (
        <Confirmation
          formValues={formValues}
          onSubmit={(email) => console.log(`Email submitted: ${email}`)}
          onWait={() => console.log("User chose to wait")}
        />
      )}
    </div>
  );
};

export default Home;
