const isValidResponse = (response) => {
  if (!response || !Array.isArray(response.groceryList)) {
    return false;
  }

  for (let item of response.groceryList) {
    if (typeof item.department !== "string" || !Array.isArray(item.list)) {
      return false;
    }
  }

  return true;
};

const getGroceryList = async (prompt, attempts = 0) => {
  try {
    const response = await fetch(
      "https://ai-meal-planner-server.onrender.com/grocerylist/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Grocery list.");
    }

    const data = await response.json();

    if (isValidResponse(data)) {
      return data.groceryList;
    } else {
      if (attempts < 5) {
        console.log("Invalid data received, retrying...");
        return getGroceryList(prompt, attempts + 1);
      } else {
        throw new Error(
          "Maximum attempts reached, still receiving invalid data."
        );
      }
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getGroceryList;
