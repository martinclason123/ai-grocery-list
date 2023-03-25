const getGroceryList = async (prompt) => {
  try {
    const response = await fetch("/api/generic_endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch meals.");
    }

    const data = await response.json();
    console.log(data.choices[0]);
  } catch (error) {
    console.log(error);
  }
};

export default getGroceryList;
