const fetchMeals = async (prompt, setIsLoading, setMeals, setError) => {
  setIsLoading(true);
  try {
    const response = await fetch("/api/fetch_meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch meals.");
    }

    const data = await response.json();
    setMeals(data.meals);
    setIsLoading(false);
  } catch (error) {
    setError(error.message);
    setIsLoading(false);
  }
};

export default fetchMeals;
