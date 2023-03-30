import styled from "styled-components";

export const PrintPage = styled.div`
  min-height: 1100px;
  width: 850px;
  font-family: roboto;
  display: flex;
  flex-direction: column;
`;

export const MealPlanContainer = styled.div`
  margin-left: 40px;
`;
export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;
export const MealTitle = styled.span`
  font-weight: bold;
`;
export const Meal = styled.p`
  font-size: 30px;
`;

export const InstructionsList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 800px;
`;

export const InstructionItem = styled.li`
  font-size: 16px;
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 800px;
`;

export const IngredientItem = styled.li`
  font-size: 16px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  margin: 4px 0;
`;

export const GroceryListContainer = styled.div`
  margin-left: 40px;
`;
