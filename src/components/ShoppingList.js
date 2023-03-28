import React, { useState, useEffect } from "react";

import {
  ShoppingListContainer,
  GroceryList,
  GroceryItem,
  GetShoppingList,
} from "@/styles/ConfirmationPageStyles";

import { shoppingListPrompt } from "./prompts";
import { getGroceryList } from "./mealFunctions";

const ShoppingList = ({ listData, formData }) => {
  /* This should set list to the groceryList data in local storage if it is present, so that the data is displayed on refresh*/
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedList = localStorage.getItem("groceryList");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  const handleGetShoppingList = async (data) => {
    try {
      setLoading(true);
      const titles = data.map((item) => item.title).join(", ");
      const ingredients = data
        .map((item) => item.recipe)
        .flat()
        .join(", ");

      let allergies;

      const allergiesList = formData.restrictions.join(", ");
      if (allergiesList === "") {
        allergies = "";
      } else {
        allergies = `I have severe allergies to the following: ${allergiesList}, ensure they are not included
        in the items on this shopping list.
        `;
      }

      const store = formData.store;

      const prompt = shoppingListPrompt(allergies, store, ingredients, titles);
      const groceryList = await getGroceryList(prompt);
      localStorage.setItem("groceryList", JSON.stringify(groceryList));

      setLoading(false);
      setList(groceryList);
    } catch (error) {
      setLoading(false);
      setError(true);
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
