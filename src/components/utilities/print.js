import { useReactToPrint } from "react-to-print";
const print = (components) => {
  let meals = localStorage.getItem("selectedMeals");
  console.log(meals);
};

export default print;
