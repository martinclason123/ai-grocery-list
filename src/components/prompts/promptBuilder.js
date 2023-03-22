export const buildPrompt = (formData) => {
  const totalMeals = parseInt(formData.days, 10) + 5;
  const prompt = `Create a meal plan for ${
    formData.days
  } days, that will feed ${formData.adults} adults and ${
    formData.children
  } children. Include an additional 5 extra dinner meal options, for a total of ${totalMeals} dinner meals. Only choose meals with ingredients that have a high chance of being available for purchase at ${
    formData.store
  } grocery store, and should prioritize the following aspects: ${formData.priorities.join(
    ", "
  )}. Make sure none of the ingredients contain ${formData.restrictions.join(
    ", "
  )}. The only meal that should be included is dinner.

Please provide the meal plan in the following JSON format:
{
  "meals": [
    "Meal 1",
    "Meal 2",
    "Meal 3",
    ...
    "Meal ${totalMeals}"
  ]
}`;

  return prompt;
};
