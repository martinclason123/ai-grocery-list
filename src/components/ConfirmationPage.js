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
  const [meals, setMeals] = useState(initialMeals);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [replacementsUsed, setReplacementsUsed] = useState(0);
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
        {/* Instead of being a "back" button, this should fire fetchMeals again.
            It should say "New Meals". Which should result in new meals and replacement 
            meals based off what the existing form data. Basically the page should 
            act as if it is the first time the user has gotten to this page. 
            Any recipes should be cleared out as well
        */}
        <BackButton onClick={handleNewMealsClick}>New Meals</BackButton>
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
