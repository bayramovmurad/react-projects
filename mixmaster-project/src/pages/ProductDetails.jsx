import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMixMasterData } from "../redux/productSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(state => state.data);
  const { id } = useParams();

  const [drinkDetails, setDrinkDetails] = useState({});

  useEffect(() => {
    if (!data.drinks) {
      dispatch(getMixMasterData());
    } else {
      const drink = data.drinks.find(item => item.idDrink === id);
      if (drink) {
        setDrinkDetails(drink);
      }
    }
  }, [dispatch, data, id]);



  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!drinkDetails) {
    return <h1>Drink not found</h1>;
  }

  const { strDrink, strCategory, strAlcoholic, strIngredient1, strInstructions, strDrinkThumb } = drinkDetails;

  return (
    <div>
      <img width={200} src={strDrinkThumb} alt="" />
      <h2>Name: {strDrink}</h2>
      <h3>Category: {strCategory}</h3>
      <h4>Info: {strAlcoholic}</h4>
      <h5>Ingredient: {strIngredient1}</h5>
      <h6>Instructions: {strInstructions}</h6>
    </div>
  );
};

export default ProductDetails;
