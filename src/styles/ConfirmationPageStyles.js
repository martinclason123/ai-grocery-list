import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`;

export const MealList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Meal = styled.li`
  font-size: 1.1rem;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
`;

export const BackButton = styled.button`
  background-color: #0099ff;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #007acc;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

export const ErrorText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #cc0000;
`;

export const ReplaceButton = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  color: black;
  cursor: pointer;
  &:hover {
    color: #0099ff;
  }
`;

export const MealContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

export const GetRecipes = styled.button`
  background-color: #0099ff;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #007acc;
  }
`;

// Add these styled components at the bottom of the file
export const RecipeCard = styled.div`
  /* Your styles for the recipe card container */
`;

export const RecipeHeader = styled.h2`
  /* Your styles for the recipe header */
`;

export const IngredientsList = styled.ul`
  /* Your styles for the ingredients list */
`;

export const IngredientListItem = styled.li`
  /* Your styles for the ingredient list item */
`;

export const InstructionsList = styled.ol`
  /* Your styles for the instructions list */
`;

export const InstructionListItem = styled.li`
  /* Your styles for the instruction list item */
`;

export const RecipesContainer = styled.div`
  /* Your styles for the recipes container */
`;
