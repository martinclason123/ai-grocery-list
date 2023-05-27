// src/utils/getRecipes.js
import { minifyRaw } from "babel-plugin-styled-components/lib/minify";
import { recipesPrompt } from "../prompts";

const responseHandler = (data) => {
  return {
    title: data[0].title,
    prepTime: data[1].prepTime,
    ingredients: data[2].ingredients,
    instructions: data[3].instructions,
  };
};

const getRecipes = async (formData, meal) => {
  const prompt = await recipesPrompt(formData, [meal]);
  let attempts = 0;
  const maxAttempts = 5; // Set the maximum number of attempts

  while (attempts < maxAttempts) {
    attempts += 1;
    try {
      const response = await fetch("https://ai-meal-planner-server.onrender.com/recipes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recipes.");
      }

      const data = await response.json(); // convert the response to JSON
      console.log(`data response from API: ${JSON.stringify(data, null, 2)}`); // log the data

      const reply = {
        title: data.recipe[0].title,
        prepTime: data.recipe[1].prepTime,
        ingredients: data.recipe[2].ingredients,
        instructions: data.recipe[3].instructions,
      };

      if (reply.title && reply.prepTime && reply.ingredients && reply.instructions) {
        return reply; // return the JavaScript object if all values are defined
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  throw new Error("Max attempts exceeded. Could not fetch valid recipe data.");
};

export default getRecipes;
