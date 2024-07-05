import { useState } from 'react';
import basketData from '../data/basketData.json';
import BasketList from './components/BasketList';
import PorductList from './components/PorductList';



const App = () => {
  const [basket,setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => {
      const itemIndex = prevBasket.findIndex(basketItem => basketItem.id === item.id);
      if (itemIndex !== -1) {
        const updatedBasket = [...prevBasket];
        updatedBasket[itemIndex] = {
          ...updatedBasket[itemIndex],
          amount: updatedBasket[itemIndex].amount + item.amount,
        };
        return updatedBasket;
      } else {
        return [...prevBasket, item];
      }
    });
  };
  
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      {basketData.map((item) => (
        <PorductList key={item.id} item={item} addToBasket={addToBasket} />
       
      ))}
      <BasketList basket={basket} />
    </div>
  )
}
export default App