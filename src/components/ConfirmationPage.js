import React, { useState, useEffect } from "react";
import { buildPrompt } from "@/components/prompts/promptBuilder";
import {
  handleGetRecipesClick,
  replaceMeal,
  fetchMeals,
} from "./mealFunctions";
import {
  ConfirmationContainer,
  MealList,
  Meal,
  BackButton,
  ReplaceButton,
  ButtonsContainer,
  GetRecipes,
  RecipesContainer,
} from "@/styles/ConfirmationPageStyles";

const ConfirmationPage = ({ formData }) => {
  const initialMeals = JSON.parse(localStorage.getItem("meals")) || [];
  /* This logic should be repeated, except it should hold recipe data */
  const [meals, setMeals] = useState(initialMeals);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [replacementsUsed, setReplacementsUsed] = useState(0);
  /* This should load the recipe cards right away if the recipe data is in local storage */
  const [recipeCards, setRecipeCards] = useState([]);
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState(null);

  useEffect(() => {
    if (meals.length === 0) {
      const prompt = buildPrompt(formData);
      fetchMeals(prompt, setIsLoading, setMeals, setError);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  /* I would also like the recipes data to be saved in local storage, so that on refresh, that data does not need to be fetched again by the API */

  const mealsToDisplay = meals.slice(0, parseInt(formData.days));
  const extraMeals = meals.slice(parseInt(formData.days));

  const handleReplaceMeal = (mealIndex) => {
    replaceMeal(mealIndex, formData, extraMeals, setMeals, setReplacementsUsed);
  };

  const handleRecipesClick = () => {
    handleGetRecipesClick(
      formData,
      mealsToDisplay,
      recipeCards,
      setRecipeCards,
      setCurrentLoadingIndex
    );
  };

  const handleNewMealsClick = () => {
    const prompt = buildPrompt(formData);
    fetchMeals(prompt, setIsLoading, setMeals, setError);
    setRecipeCards([]);
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
      <ButtonsContainer>
        <BackButton onClick={handleNewMealsClick}>New Meals</BackButton>
        {/* The get recipes button should not be shown if recipes have already been fetched or are in local storage */}

        <GetRecipes onClick={handleRecipesClick}>Get Recipes</GetRecipes>
      </ButtonsContainer>
      <RecipesContainer>
        <RecipesContainer>
          {recipeCards}
          {currentLoadingIndex !== null && (
            <div>
              <h1>Loading Recipe {currentLoadingIndex}</h1>
            </div>
          )}
        </RecipesContainer>
      </RecipesContainer>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
