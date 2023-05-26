export const buildPrompt = (formData) => {
  const content = `You are a helpful assistant that finds meal plans specifically catered to users restrictions, diets, allergies, shopping store preference and other factors. you should respond with nothing other than JSON. 
  for this request, only return meal titles. Do not include ingredients or cooking instructions.

Example format:
{
"meals": [
"Grilled Cheese and tomato soup,
"Steak and potatos",
"Spaghetti and meatballs",
]
}
`;
  const totalMeals = parseInt(formData.days, 10) + 5;
  const prompt = `Provide ${totalMeals} dinner ideas, Only choose meals with ingredients that have a high chance of being available for purchase at ${
    formData.store
  } grocery store, and should prioritize the following aspects: ${formData.priorities.join(
    ", "
  )}. Make sure none of the ingredients contain ${formData.restrictions.join(
    ", "
  )}. 
`;

  return { prompt: prompt, content: content };
};
