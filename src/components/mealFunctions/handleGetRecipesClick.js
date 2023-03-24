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
  setCurrentLoadingIndex
) => {
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

export default handleGetRecipesClick;
