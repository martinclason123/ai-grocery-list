export const buildPrompt = (formData) => {
  const mealTypes = formData.meals
    .map((mealType) => {
      return `{ "${mealType}": "Example ${mealType}" }`;
    })
    .join(", ");

  const dayExamples = Array(formData.days)
    .fill()
    .map((_, index) => {
      return `{
        "day${index + 1}": [
          ${mealTypes}
        ]
      }`;
    })
    .join(", ");

  const prompt = `Create a meal plan for exactly ${
    formData.days
  } days, that will feed ${formData.adults} adults and ${
    formData.children
  } children. Only choose meals with ingredients that have a high chance of being available for purchase at ${
    formData.store
  } grocery store, and should prioritize the following aspects: ${formData.priorities.join(
    ", "
  )}. Make sure none of the ingredients contain ${formData.restrictions.join(
    ", "
  )}. The only meals that should be included are: ${formData.meals.join(", ")}.
    
    Please provide the meal plan in the following JSON format:
    {
      "mealPlan": [
        ${dayExamples}
      ]
    }`;

  return prompt;
};
