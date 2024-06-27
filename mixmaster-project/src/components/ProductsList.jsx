import { Link } from "react-router-dom";

const ProductsList = ({ data, productResult }) => {
  const displayData = productResult.length > 0 ? productResult : data;

  return (
    <div>
      {displayData.map((item) => (
        <div key={item.idDrink}>
          <img width={200} src={item.strDrinkThumb} alt={item.strDrink} />
          <Link to={`/product-details/${item.idDrink}`}>
          details
          </Link>
          <h2><strong>{item.strDrink}</strong></h2>
          <h3>{item.strGlass}</h3>
          <h4>{item.strAlcoholic}</h4>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
