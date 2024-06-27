import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList";
import { useEffect } from "react";
import { getMixMasterData, setProductResult, setProductSearch } from "../redux/productSlice";


const Product = () => {
  const dispatch = useDispatch();
  const { isLoading, data,productSearch,productResult } = useSelector(state => state.data);

  const getProductResultClick = () => {
    const filteredProductDataName = data.drinks.filter(productName => productName.strGlass.toLowerCase().includes(productSearch.toLowerCase()));
    dispatch(setProductResult(filteredProductDataName));
  }

  useEffect(() => {
    dispatch(getMixMasterData());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  return (
    <div>
      <div>
        <input type="text" value={productSearch} onChange={e => dispatch(setProductSearch(e.target.value))} />
        <button onClick={getProductResultClick}>click</button>
      </div>
      <ProductsList data={data.drinks} productResult={productResult}/>
    </div>
  );
};

export default Product;
