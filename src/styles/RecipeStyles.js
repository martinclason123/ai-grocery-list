// src/styles/RecipeStyles.js
import styled from "styled-components";

export const RecipeCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
`;

export const RecipeTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
`;

export const IngredientsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 8px;
`;

export const InstructionsList = styled.ol`
  padding-left: 16px;
  margin-bottom: 0;
`;
