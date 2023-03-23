// src/utils/getRecipes.js
import { recipesPrompt } from "../prompts";

const responseHandler = (responseText) => {
  // Modify this function to process the plain text response as needed
  return responseText;
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
