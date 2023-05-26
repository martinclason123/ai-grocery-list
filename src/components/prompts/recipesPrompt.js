const recipesPrompt = (formData, meal) => {
  const content = `You are a helpful assistant that receives a meal title, and then provides an estimated prep time, ingredients list, and step by
                   step instructions. It is crucial you respond with nothing other than JSON for this request You choose recipes that have no more than 20 ingredients.

Your response should only include this strict JSON structure:
{
  "recipe": [
    { "title": "Mac and Cheese" },
    { "prepTime": "10 minutes" },
    { "recipe": ["cheese", "bread", "butter"] },
    { "instructions": ["Heat pan", "Spread butter evenly..."] }
  ]
}
`;
  const prompt = `Please provide a recipe for the following meal: ${meal} that is suitable for ${
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
  
  `;

  return { prompt: prompt, content: content };
};

export default recipesPrompt;
