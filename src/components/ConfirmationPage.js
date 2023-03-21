import React, { useState, useEffect } from "react";
import {
  ConfirmationContainer,
  MealList,
  Meal,
  BackButton,
  LoadingText,
  ErrorText,
} from "@/styles/ConfirmationPageStyles";

const ConfirmationPage = ({ formData, onBackButtonClick }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/fetch_meals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setMeals(data.meals);
        } else {
          const errorData = await response.json();
          setError(
            `Error: ${
              errorData.message ||
              "An error occurred while fetching meals. Please try again."
            }`
          );
        }
      } catch (error) {
        setError(
          `Error: ${
            error.message ||
            "An error occurred while fetching meals. Please try again."
          }`
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [formData]);

  return (
    <ConfirmationContainer>
      <h1>Meal Plan</h1>
      {isLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : (
        <MealList>
          {meals.map((meal, index) => (
            <Meal key={index}>{meal}</Meal>
          ))}
        </MealList>
      )}
      <BackButton onClick={onBackButtonClick}>Back</BackButton>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
