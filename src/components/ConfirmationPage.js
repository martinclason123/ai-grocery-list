import React, { useState, useEffect } from "react";
import { buildPrompt } from "@/components/prompts/promptBuilder";
import { getRecipes } from "./mealFunctions";
import { Accordion } from "@/snippets";
import {
  ConfirmationContainer,
  MealList,
  Meal,
  BackButton,
  ReplaceButton,
  ButtonsContainer,
  GetRecipes,
  RecipeCard,
  RecipeHeader,
  IngredientsList,
  IngredientListItem,
  InstructionsList,
  InstructionListItem,
  RecipesContainer,
  LoadingContainer,
  LoadingTitle,
} from "@/styles/ConfirmationPageStyles";

const ConfirmationPage = ({ formData, onBackButtonClick }) => {
  const initialMeals = JSON.parse(localStorage.getItem("meals")) || [];
  const [meals, setMeals] = useState(initialMeals);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [replacementsUsed, setReplacementsUsed] = useState(0);
  const [recipeCards, setRecipeCards] = useState([]);
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(0);

  useEffect(() => {
    if (meals.length === 0) {
      const fetchMeals = async (prompt) => {
        setIsLoading(true);
        try {
          const response = await fetch("/api/fetch_meals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
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

      const prompt = buildPrompt(formData);
      fetchMeals(prompt);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

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
  /* I would like this code to be moved to handleGetRecipesClick.js in src/components/mealFunctions */
  const handleGetRecipesClick = async () => {
    const recipeCardElements = [...recipeCards];

    for (const [index, meal] of mealsToDisplay.entries()) {
      setCurrentLoadingIndex(index + 1);
      const response = await getRecipes(formData, meal);

      const card = (
        <Accordion key={response.title} index={index} defaultOpen={index === 0}>
          <RecipeCard>
            <div>
              <RecipeHeader>{response.title}</RecipeHeader>
            </div>
            <p>Estimated prep time: {response.prepTime}</p>
            <RecipeHeader>Ingredients</RecipeHeader>
            <IngredientsList>
              {response.recipe.map((ingredient) => (
                <IngredientListItem key={ingredient}>
                  {ingredient}
                </IngredientListItem>
              ))}
            </IngredientsList>
            <RecipeHeader>Cooking Instructions</RecipeHeader>
            <InstructionsList>
              {response.instructions.map((instruction, index) => (
                <InstructionListItem key={index}>
                  {instruction.text}
                </InstructionListItem>
              ))}
            </InstructionsList>
          </RecipeCard>
        </Accordion>
      );

      recipeCardElements.push(card);
      setRecipeCards([...recipeCardElements]);
    }
    setCurrentLoadingIndex(null);
  };
  /*end of code that should be exported */
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
        <BackButton onClick={onBackButtonClick}>Back</BackButton>
        <GetRecipes onClick={handleGetRecipesClick}>Get Recipes</GetRecipes>
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
