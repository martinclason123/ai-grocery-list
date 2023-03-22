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
