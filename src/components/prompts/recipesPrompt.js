const recipesPrompt = (formData, meal) => {
  const prompt = `Please provide a recipe for the following meal that is suitable for ${
    formData.adults
  } adults and ${
    formData.children
  } children. This recipe should only contain ingredients that have a high chance of being available at ${
    formData.store
  } grocery store and prioritize the following aspects: ${formData.priorities.join(
    ", "
  )}. Make sure none of the ingredients contain ${formData.restrictions.join(
    ", "
  )}.
  
  ${meal}
  
  Please provide the recipe in the following format:
  
  Title: ${meal}
  Recipe:
  - Ingredient 1
  - Ingredient 2
  - ...
  Instructions:
  - Step 1:
  - Step 2:
  ...
  `;

  return prompt;
};

export default recipesPrompt;
