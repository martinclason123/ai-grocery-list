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

  return (
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
  );
};

export default PrintAll;
