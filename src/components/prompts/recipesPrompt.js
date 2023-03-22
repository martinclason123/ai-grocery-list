const recipesPrompt = (formData, mealsArray) => {
  const mealsList = mealsArray
    .map((meal, index) => `Meal ${index + 1}: ${meal}`)
    .join("\n");

  const prompt = `Please provide recipes for the following meals that are suitable for ${
    formData.adults
  } adults and ${
    formData.children
  } children. These recipes should only contain ingredients that have a high chance of being available at ${
    formData.store
  } grocery store and prioritize the following aspects: ${formData.priorities.join(
    ", "
  )}. Make sure none of the ingredients contain ${formData.restrictions.join(
    ", "
  )}.
  
  ${mealsList}
  
  Please provide the recipes in the following format:
  
  Recipe for Meal 1:
  - Ingredient 1
  - Ingredient 2
  - ...
  Cooking instructions for Meal 1:
  - Step 1:
  - Step 2:
  ...
  
  Recipe for Meal 2:
  - Ingredient 1
  - Ingredient 2
  - ...
  Cooking instructions for Meal 2:
  - Step 1:
  - Step 2:
  ...
  `;

  return prompt;
};

export default recipesPrompt;
