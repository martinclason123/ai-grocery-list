import {
  ShoppingListContainer,
  GroceryList,
  GroceryItem,
  GetShoppingList,
} from "@/styles/ConfirmationPageStyles";

import { shoppingListPrompt } from "./prompts";
import { getGroceryList } from "./mealFunctions";

const ShoppingList = ({ listData, formData }) => {
  const handleGetShoppingList = (data) => {
    const titles = data.map((item) => item.title).join(", ");
    const ingredients = data
      .map((item) => item.recipe)
      .flat()
      .join(", ");

    console.log("Titles:", titles);
    console.log("Ingredients:", ingredients);
    console.log(typeof formData);
    console.log(formData);
    let allergies;

    const allergiesList = formData.restrictions.join(", ");
    if (allergiesList === "") {
      allergies = "";
    } else {
      allergies = `I have severe allergies to the following: ${allergiesList}, ensure they are not included
        in the items on this shopping list.
        `;
    }
    // const allergies = `${formData.restrictions.join(", ")}`;

    console.log(allergies);
    const store = formData.store;
    console.log("preferred store:", store);

    const prompt = shoppingListPrompt(allergies, store, ingredients, titles);
    getGroceryList(prompt);
  };
  return (
    <ShoppingListContainer>
      <GetShoppingList
        onClick={() => {
          handleGetShoppingList(listData);
        }}
      >
        Get Shopping List
      </GetShoppingList>
    </ShoppingListContainer>
  );
};

export default ShoppingList;
