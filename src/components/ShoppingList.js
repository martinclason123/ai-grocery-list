import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

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
  const [isEmpty, setIsEmpty] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  console.log(formData);
  const containerRef = useRef();

  useEffect(() => {
    const storedList = localStorage.getItem("groceryList");
    if (storedList) {
      setList(JSON.parse(storedList));
      setIsEmpty(false);
    }
  }, []);

  const handleGetShoppingList = async (data) => {
    try {
      setLoading(true);
      console.log("data: ", data[0].ingredients);
      const titles = data.map((item) => item.title).join(", ");
      console.log("data:", data);
      // const ingredients = data[0].ingredients
      //   .map((item) => item)
      //   .flat()
      //   .join(", ");
      const ingredients = data
        .map((item) => item.ingredients)
        .flat()
        .join(", ");

      let allergies;

      const allergiesList = formData.restrictions.join(", ");
      if (allergiesList === "") {
        allergies = "";
      } else {
        //       allergies = `I have severe allergies to the following: ${allergiesList}, ensure they are not included
        // in the items on this shopping list.`;
        allergies = "";
      }

      const store = formData.store;

      const prompt = shoppingListPrompt(allergies, store, ingredients, titles);
      const groceryList = await getGroceryList(prompt);
      localStorage.setItem("groceryList", JSON.stringify(groceryList));

      setLoading(false);
      setList(groceryList);
      setIsEmpty(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  const printShoppingList = useReactToPrint({
    content: () => containerRef.current,
  });
  const renderGetShoppingListButton = () => {
    /* I would like this function to also return a "Print Shopping List" button when it has 
        finished loading. it should open a print dialog that includes the shopping list

    */

    if (error) {
      return (
        <>
          <p>
            There was an error creating the shopping list. Please try again.
          </p>
          <GetShoppingList onClick={() => handleGetShoppingList(listData)}>
            Get Shopping List
          </GetShoppingList>
        </>
      );
    } else if (loading) {
      return <p>Loading Shopping List...</p>;
    } else if (isEmpty) {
      return (
        <GetShoppingList onClick={() => handleGetShoppingList(listData)}>
          Get Shopping List
        </GetShoppingList>
      );
    } else {
      return (
        <>
          <GetShoppingList onClick={() => handleGetShoppingList(listData)}>
            Get Shopping List
          </GetShoppingList>
          <h1 onClick={toggleList}>Shopping List {isOpen ? "▼" : "▶"}</h1>
          <button onClick={printShoppingList}>Print</button>
        </>
      ); //should see a "▼" : "▶" based on open or closed state.
    }
  };

  return (
    <ShoppingListContainer ref={containerRef}>
      {renderGetShoppingListButton()}
      {/* This is what should be shown or hidden when Shopping list is clicked */}
      {isOpen && (
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
      )}
    </ShoppingListContainer>
  );
};

export default ShoppingList;
