const shoppingListPrompt = (allergies, store, ingredients, meals) => {
  const prompt = `
    I am making a shopping list for the following meals: ${meals},
    Here is a total list of all the ingredients called for in the
    recipes: ${ingredients}. ${allergies} I would like all of the items to be 
    from ${store} if possible. Please return the list organized by grocery store
    department. 
    `;
  return prompt;
};
export default shoppingListPrompt;
