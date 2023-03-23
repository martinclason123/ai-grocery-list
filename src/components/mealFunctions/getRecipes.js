// src/utils/getRecipes.js
import { recipesPrompt } from "../prompts";

const responseHandler = (responseText) => {
  const title = responseText.match(/Title: (.*)/)[1];
  const recipe = responseText
    .match(/Recipe:\n([\s\S]*?)Instructions:/)[1]
    .trim()
    .split("\n")
    .map((line) => line.trim().slice(2));
  const instructions = responseText
    .match(/Instructions:\n([\s\S]*)/)[1]
    .trim()
    .split("\n")
    .map((line) => ({
      step: parseInt(line.match(/- Step (\d+):/)[1], 10),
      text: line
        .trim()
        .slice(line.indexOf(":") + 1)
        .trim(),
    }));

  return {
    title,
    recipe,
    instructions,
  };
};

const getRecipes = async (formData, meal) => {
  const prompt = await recipesPrompt(formData, [meal]);

  try {
    const response = await fetch("/api/generic_endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recipes.");
    }

    const data = await response.json();
    const jsonResponseText = data.choices[0].text.trim().slice();
    const processedResponse = responseHandler(jsonResponseText);
    return processedResponse;
  } catch (error) {
    console.error(error.message);
  }
};

export default getRecipes;
