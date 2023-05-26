// src/utils/getRecipes.js
import { minifyRaw } from "babel-plugin-styled-components/lib/minify";
import { recipesPrompt } from "../prompts";

const responseHandler = (responseText) => {
  // const title = responseText.match(/Title: (.*)/)[1];
  // const prepTime = responseText.match(/Preparation Time: (.*)/)[1];
  // const recipe = responseText
  //   .match(/Recipe:\n([\s\S]*?)Instructions:/)[1]
  //   .trim()
  //   .split("\n")
  //   .map((line) => line.trim().slice(2));
  // const instructions = responseText
  //   .match(/Instructions:\n([\s\S]*)/)[1]
  //   .trim()
  //   .split("\n")
  //   .map((line) => ({
  //     step: parseInt(line.match(/- Step (\d+):/)[1], 10),
  //     text: line.slice(line.indexOf(":") + 2).trim(),
  //   }));

  return {
    title,
    recipe,
    instructions,
    prepTime,
  };
};

const getRecipes = async (formData, meal) => {
  const prompt = await recipesPrompt(formData, [meal]);

  try {
    const response = await fetch("http://localhost:5000/recipes/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recipes.");
    }

    const data = await response;

    console.log(data);

    // const processedResponse = responseHandler(data);
    console.log(data);
    return data;
  } catch (error) {
    console.log(data);
    console.error(error.message);
  }
};

export default getRecipes;
