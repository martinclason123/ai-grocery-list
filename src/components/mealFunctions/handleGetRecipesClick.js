/* This should be rewritten to check for local storage. If there is not an array in localStorage that holds the data used to fill out the cards
   one should be created. When a response for a recipe is received from the API, that response should be pushed into that array.  If local storage exist, 
   it should be used to fill out the cards rather than another API card
*/
import getRecipes from "./getRecipes";
import { Accordion } from "@/snippets";
import {
  RecipeCard,
  RecipeHeader,
  IngredientsList,
  IngredientListItem,
  InstructionsList,
  InstructionListItem,
} from "@/styles/ConfirmationPageStyles";

const handleGetRecipesClick = async (
  formData,
  mealsToDisplay,
  recipeCards,
  setRecipeCards,
  setCurrentLoadingIndex,
  recipesError,
  setRecipesError
) => {
  const storedRecipeData = JSON.parse(localStorage.getItem("recipeData")) || [];
  const recipeCardElements = [...recipeCards];

  for (const [index, meal] of mealsToDisplay.entries()) {
    try {
      setCurrentLoadingIndex(index + 1);
      let response;
      if (storedRecipeData[index]) {
        response = storedRecipeData[index];
      } else {
        response = await getRecipes(formData, meal);
        storedRecipeData[index] = response;
        localStorage.setItem("recipeData", JSON.stringify(storedRecipeData));
      }

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
      setCurrentLoadingIndex(null);

      recipeCardElements.push(card);

      setRecipeCards([...recipeCardElements]);
    } catch (error) {
      setRecipesError(true);
      setCurrentLoadingIndex(null);
      return;
    }
  }
};

export default handleGetRecipesClick;
