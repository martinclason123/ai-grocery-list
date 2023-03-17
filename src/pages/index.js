import React, { useState } from "react";
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
        <div>
          <h1>Meal Plan Generator</h1>
          <p>Discover the perfect meal plan tailored to your preferences.</p>
          <button onClick={() => setShowForm(true)}>Get Started</button>
        </div>
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
