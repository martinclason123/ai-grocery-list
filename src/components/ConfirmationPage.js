import React, { useState, useEffect } from "react";
import {
  ConfirmationContainer,
  MealList,
  Meal,
  BackButton,
} from "@/styles/ConfirmationPageStyles";

const ConfirmationPage = ({ formData, onBackButtonClick }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/fetch_meals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }

        const data = await response.json();
        setMeals(data.meals);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const mealsToDisplay = meals.slice(0, parseInt(formData.days));

  return (
    <ConfirmationContainer>
      <h1>Meal Plan</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <MealList>
          {mealsToDisplay.map((meal, index) => (
            <Meal key={index}>
              <p>
                Day {index + 1}: {meal}
              </p>
            </Meal>
          ))}
        </MealList>
      )}
      <BackButton onClick={onBackButtonClick}>Back</BackButton>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
