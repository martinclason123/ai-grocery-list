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
  const [allowReplace, setAllowReplace] = useState(true);

  useEffect(() => {
    if (meals.length === 0) {
      const prompt = buildPrompt(formData);
      fetchMeals(prompt, setIsLoading, setMeals, setError);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  useEffect(() => {
    if (localStorage.getItem("recipeData")) {
      handleRecipesClick();
    }
  }, []);

  const mealsToDisplay = meals.slice(0, parseInt(formData.days));
  const extraMeals = meals.slice(parseInt(formData.days));

  const handleReplaceMeal = (mealIndex) => {
    replaceMeal(mealIndex, formData, extraMeals, setMeals, setReplacementsUsed);
  };

  const handleRecipesClick = () => {
    setAllowReplace(false);
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
    localStorage.removeItem("recipeData");
    fetchMeals(prompt, setIsLoading, setMeals, setError);
    allowReplace(true);
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
              {allowReplace && extraMeals.length > 0 && (
                <ReplaceButton onClick={() => handleReplaceMeal(index)}>
                  Replace
                </ReplaceButton>
              )}
            </Meal>
          ))}
        </MealList>
      )}

      {allowReplace && replacementsUsed > 0 && (
        <p>Replacements left: {extraMeals.length}</p>
      )}

      <ButtonsContainer>
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
      {/* if there is data in localStorage "recipeData" AND all the recipes have finished loading, the shopping list container should be rendered */}
      {/* 
      {localStorage.getItem("recipeData") && currentLoadingIndex === null ? (
        <ShoppingList
          listData={JSON.parse(localStorage.getItem("recipeData"))}
          formData={formData}
        />
      ) : null}
      */}
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
