const replaceMeal = (
  mealIndex,
  formData,
  extraMeals,
  setMeals,
  setReplacementsUsed
) => {
  if (extraMeals.length > 0) {
    setMeals((prevMeals) => {
      const newMeals = [...prevMeals];
      newMeals[mealIndex] = extraMeals[0];
      newMeals.splice(parseInt(formData.days), 1); // Remove the used extra meal
      return newMeals;
    });
    setReplacementsUsed((prevReplacementsUsed) => prevReplacementsUsed + 1);
  }
};

export default replaceMeal;
