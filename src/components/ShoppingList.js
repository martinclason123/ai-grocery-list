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
  const [list, setList] = useState(null);
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

      console.log(allergies);
      const store = formData.store;
      console.log("preferred store:", store);

      const prompt = shoppingListPrompt(allergies, store, ingredients, titles);
      const groceryList = await getGroceryList(prompt);
      setLoading(false);
      /* grocery list looks like this if logged:
       {text: '\n\nAldi Shopping List:\n\nProduce:\n2 red bell peppers…e\nRice vinegar\nHoney\n\nBakery:\n4-6 flour tortillas', index: 0, logprobs: null, finish_reason: 'stop'}

      I would like the data reformatted so it can be rendered to the user as shown in return. 
    */
      // setList(groceryList.text);
      console.log(groceryList);
    } catch (error) {
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
        {list}
        {/* 
        <h1>Aldi Shopping List</h1>
         <div>
           <h2>Produce</h2>
           <ul>
            <li>2 red bell pepper</li>
           </ul>
        </div> 
         <div>
           <h2>Meat</h2>
           <ul>
            <li>2 boneless skinless chicken breasts</li>
           </ul>
           ...etc
        </div> 
        */}
      </div>
    </ShoppingListContainer>
  );
};

export default ShoppingList;
