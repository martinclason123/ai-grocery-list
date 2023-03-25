const shoppingListPrompt = (allergies, store, ingredients, meals) => {
  //   const oldprompt = `
  //     I am making a shopping list for the following meals: ${meals},
  //     Here is a total list of all the ingredients called for in the
  //     recipes: ${ingredients}. ${allergies} I would like all of the items to be
  //     from ${store} if possible. Please return the list organized by grocery store
  //     department.
  //     `;
  const prompt = `I am making a shopping list for the following meals: Chicken Fajitas, Vegetable Stir Fry. Here is a total list of all the ingredients called for in the recipes: 2 boneless, skinless chicken breasts, 1 red bell pepper, 1 green bell pepper, 1 onion, 2 tablespoons olive oil, 1 teaspoon garlic powder, 1 teaspoon chili powder, 1 teaspoon cumin, 1 teaspoon paprika, 1/2 teaspoon salt, 1/4 teaspoon black pepper, 4-6 flour tortillas, 2 tablespoons vegetable oil, 2 cloves garlic, minced, 1 onion, diced, 2 carrots, sliced, 1 red bell pepper, diced, 1 cup broccoli florets, 1 cup snow peas, 2 tablespoons soy sauce, 2 tablespoons rice vinegar, 2 tablespoons honey, Salt and pepper, to taste. I have severe allergies to the following: Peanuts, ensure they are not included in the items on this shopping list. I would like all of the items to be from Aldi if possible. Please provide a shopping list with the most common purchase sizes that will cover the ingredients required for the recipes. Organize the list by grocery store department.`;
  return prompt;
};
export default shoppingListPrompt;
