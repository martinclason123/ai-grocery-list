const fetchMeals = async (formData, setIsLoading, setError, setMeals) => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch("/api/fetch_meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setMeals(data.mealPlan);
      sessionStorage.setItem("meals", JSON.stringify(data.mealPlan));
    } else {
      const errorData = await response.json();
      setError(
        `Error: ${
          errorData.message ||
          "An error occurred while fetching meals. Please try again."
        }`
      );
    }
  } catch (error) {
    setError(
      `Error: ${
        error.message ||
        "An error occurred while fetching meals. Please try again."
      }`
    );
  } finally {
    setIsLoading(false);
  }
};

export default fetchMeals;
