import React, { useRef } from "react";
import {
  PrintPage,
  MealPlanContainer,
  MealTitle,
  Meal,
  Title,
  InstructionsList,
  InstructionItem,
  IngredientItem,
  IngredientListItem,
  IngredientsList,
  GroceryListContainer,
  ListItem,
} from "@/styles/PrintStyles";

const PrintAll = () => {
  const meals = JSON.parse(localStorage.getItem("selectedMeals")) || [];
  const recipes = JSON.parse(localStorage.getItem("recipeData")) || [];
  const groceries = JSON.parse(localStorage.getItem("groceryList")) || [];

  console.log(groceries);

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
          <IngredientsList>
            {recipe.recipe && Array.isArray(recipe.recipe) ? (
              recipe.recipe.map((ingredient, index) => (
                <IngredientItem key={index}>{ingredient}</IngredientItem>
              ))
            ) : (
              <p>No ingredients found.</p>
            )}
          </IngredientsList>
          <InstructionsList>
            {recipe.instructions && Array.isArray(recipe.instructions) ? (
              recipe.instructions.map((instruction, index) => (
                <InstructionItem key={index}>
                  {instruction.text}
                </InstructionItem>
              ))
            ) : (
              <p>No instructions found.</p>
            )}
          </InstructionsList>
        </PrintPage>
      ))}

      <PrintPage>
        <GroceryListContainer>
          {groceries.length > 0 && <Title>Grocery List</Title>}

          {groceries.map((department, index) => (
            <>
              <h1 key={index}>{department.department}</h1>
              <ul>
                {department.list.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>{item}</ListItem>
                ))}
              </ul>
            </>
          ))}
        </GroceryListContainer>
      </PrintPage>
    </>
  );
};

export default PrintAll;
