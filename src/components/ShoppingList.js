import { react, useState } from "react";

import {
  ShoppingListContainer,
  GroceryList,
  GroceryItem,
  GetShoppingList,
} from "@/styles/ConfirmationPageStyles";

import { shoppingListPrompt } from "./prompts";
import { getGroceryList } from "./mealFunctions";

const ShoppingList = ({ listData, formData }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGetShoppingList = async (data) => {
    try {
      setLoading(true);
      const titles = data.map((item) => item.title).join(", ");
      const ingredients = data
        .map((item) => item.recipe)
        .flat()
        .join(", ");

      // console.log("Titles:", titles);
      // console.log("Ingredients:", ingredients);
      // console.log(typeof formData);
      // console.log(formData);
      let allergies;

      const allergiesList = formData.restrictions.join(", ");
      if (allergiesList === "") {
        allergies = "";
      } else {
        allergies = `I have severe allergies to the following: ${allergiesList}, ensure they are not included
        in the items on this shopping list.
        `;
      }

      console.log(allergies);
      const store = formData.store;
      console.log("preferred store:", store);

      const prompt = shoppingListPrompt(allergies, store, ingredients, titles);
      const groceryList = await getGroceryList(prompt);
      setLoading(false);
      console.log(groceryList);
      setList(groceryList);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  return (
    <ShoppingListContainer>
      {error && (
        <>
          <p>
            There was an error creating the shopping list. Please try again.
          </p>
          <GetShoppingList
            onClick={() => {
              handleGetShoppingList(listData);
            }}
          >
            Get Shopping List
          </GetShoppingList>
        </>
      )}
      {loading ? (
        <p>Loading Shopping List...</p>
      ) : (
        <GetShoppingList
          onClick={() => {
            handleGetShoppingList(listData);
          }}
        >
          Get Shopping List
        </GetShoppingList>
      )}

      <div>
        {/* This is resulting in the following error:
        TypeError: Cannot read properties of undefined (reading 'map')

Source
src\components\ShoppingList.js (86:14) @ map

  84 | 
  85 | <div>
> 86 |   {list.map((departmentItem) => (
     |        ^
  87 |     <div key={departmentItem.department}>
  88 |       <h2>{departmentItem.department}</h2>
  89 |       <ul>
        */}
        {list.map((departmentItem) => (
          <div key={departmentItem.department}>
            <h2>{departmentItem.department}</h2>
            <ul>
              {departmentItem.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ShoppingListContainer>
  );
};

export default ShoppingList;
