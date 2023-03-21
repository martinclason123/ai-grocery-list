import React, { useState, useEffect } from "react";
import { replaceMeal, fetchMeals } from "./mealFunctions";
import {
  ConfirmationContainer,
  MealList,
  Meal,
  BackButton,
  LoadingText,
  ErrorText,
  ReplaceButton,
  MealContainer,
  ButtonsContainer,
} from "@/styles/ConfirmationPageStyles";

const ConfirmationPage = ({ formData, onBackButtonClick }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedMeals = sessionStorage.getItem("meals");
    if (storedMeals) {
      setMeals(JSON.parse(storedMeals));
    } else {
      fetchMeals(formData, setIsLoading, setError, setMeals);
    }
  }, []);

  // const fetchMeals = async () => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch("/api/fetch_meals", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setMeals(data.mealPlan);
  //       sessionStorage.setItem("meals", JSON.stringify(data.mealPlan));
  //     } else {
  //       const errorData = await response.json();
  //       setError(
  //         `Error: ${
  //           errorData.message ||
  //           "An error occurred while fetching meals. Please try again."
  //         }`
  //       );
  //     }
  //   } catch (error) {
  //     setError(
  //       `Error: ${
  //         error.message ||
  //         "An error occurred while fetching meals. Please try again."
  //       }`
  //     );
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <ConfirmationContainer>
      <h1>Meal Plan</h1>
      {isLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : (
        <MealList>
          {meals.map((day, index) => {
            const dayKey = Object.keys(day)[0];
            const dayMeals = day[dayKey];
            return (
              <div key={index}>
                <h3>{dayKey}</h3>
                {dayMeals.map((meal, mealIndex) => {
                  const mealType = Object.keys(meal)[0];
                  const mealTitle = meal[mealType];
                  return (
                    <Meal key={mealIndex}>
                      <MealContainer>
                        <p>
                          {mealType}: {mealTitle}
                        </p>
                        <ReplaceButton
                          onClick={() => {
                            replaceMeal("Meal to replace:", mealTitle);
                          }}
                        >
                          Replace
                        </ReplaceButton>
                      </MealContainer>
                    </Meal>
                  );
                })}
              </div>
            );
          })}
        </MealList>
      )}
      <BackButton
        onClick={() => {
          sessionStorage.removeItem("meals");
          onBackButtonClick();
        }}
      >
        Back
      </BackButton>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
