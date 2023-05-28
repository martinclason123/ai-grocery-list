const shoppingListPrompt = (allergies, store, ingredients, meals) => {
  const content = `You are a helpful assistant that receives a list of meals,
  as well as the ingredients for the meals. You consider most common purchase 
  sizes that will be enough for what the recipe calls for. You respond with a 
  shopping list JSON object. Your response should only include this strict JSON 
  structure: 
  {
    "groceryList": [
      {
        "department": "Produce",
        "list": ["Apples", "Oranges", "Bananas"]
      },
      {
        "department": "Dairy",
        "list": ["Milk", "Cheese", "Yogurt"]
      },
      {
        "department": "Bakery",
        "list": ["Bread", "Bagels", "Croissants"]
      }
    ]
  }
  `;

  const prompt = `
      I am making a shopping list for the following meals: ${meals},
      Here is a total list of all the ingredients called for in the
      recipes: ${ingredients}. ${allergies} I would like all of the items to be
      from ${store} if possible. Please provide a shopping list with the most
      common purchase sizes that will cover the ingredients required for the 
      recipes. Organize the list by grocery store department.
  `;
  return { prompt: prompt, content: content };
};

export default shoppingListPrompt;
