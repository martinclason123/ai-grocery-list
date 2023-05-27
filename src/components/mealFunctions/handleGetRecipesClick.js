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
        console.log(`Response Object:`, response);
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
              {response.ingredients.map((ingredient) => (
                <IngredientListItem key={ingredient}>{ingredient}</IngredientListItem>
              ))}
            </IngredientsList>
            <RecipeHeader>Cooking Instructions</RecipeHeader>
            <InstructionsList>
              {response.instructions.map((instruction, index) => (
                <InstructionListItem key={index}>{instruction}</InstructionListItem>
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
