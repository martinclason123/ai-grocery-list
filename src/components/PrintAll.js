import React, { useRef } from "react";
import {
  PrintPage,
  MealPlanContainer,
  MealTitle,
  Meal,
  Title,
} from "@/styles/PrintStyles";

const PrintAll = () => {
  const meals = JSON.parse(localStorage.getItem("selectedMeals")) || [];
  const recipes = JSON.parse(localStorage.getItem("recipeData")) || [];

  console.log(recipes);

  return (
    <>
      <PrintPage>
        <MealPlanContainer>
          <Title>Meal Overview</Title>
          {meals.map((meal, index) => (
            <React.Fragment key={index}>
              <Meal>
                <MealTitle>Day {index + 1}:</MealTitle>
                {meal}
              </Meal>
            </React.Fragment>
          ))}
        </MealPlanContainer>
      </PrintPage>
      {recipes.map((recipe, index) => (
        <PrintPage key={index}>
          <Title>{recipe.title}</Title>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction.text}</li>
            ))}
          </ol>
        </PrintPage>
      ))}
    </>
  );
};

export default PrintAll;
