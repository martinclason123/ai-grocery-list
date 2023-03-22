import React, { useState, useEffect } from "react";
import {
  ConfirmationContainer,
  MealList,
  Meal,
  BackButton,
  ReplaceButton,
} from "@/styles/ConfirmationPageStyles";

const ConfirmationPage = ({ formData, onBackButtonClick }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [replacementsUsed, setReplacementsUsed] = useState(0);

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
  const extraMeals = meals.slice(parseInt(formData.days));

  const handleReplaceMeal = (mealIndex) => {
    if (extraMeals.length > 0) {
      setMeals((prevMeals) => {
        const newMeals = [...prevMeals];
        newMeals[mealIndex] = extraMeals[0];
        newMeals.splice(parseInt(formData.days), 1); // Remove the used extra meal
        return newMeals;
      });
      setReplacementsUsed((prevReplacementsUsed) => prevReplacementsUsed + 1);
    }
  };

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
              {extraMeals.length > 0 && (
                <ReplaceButton onClick={() => handleReplaceMeal(index)}>
                  Replace
                </ReplaceButton>
              )}
            </Meal>
          ))}
        </MealList>
      )}
      {replacementsUsed > 0 && <p>Replacements left: {extraMeals.length}</p>}
      <BackButton onClick={onBackButtonClick}>Back</BackButton>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
