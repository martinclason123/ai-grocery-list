import { recipesPrompt } from "../prompts";

const getRecipes = (formData, mealsArray) => {
  const prompt = recipesPrompt(formData, mealsArray);
  console.log(prompt);
};

export default getRecipes;
