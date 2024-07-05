import React from 'react';

const BasketList = ({ basket }) => {
    return (
        <div>
            <h2>Basket</h2>
            {basket.length === 0 ? (
                <p>Basket is empty</p>
            ) : (
                basket.map((item) => (
                    <div key={item.id}>
                        <img width={50} height={50} src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>Price: {(parseFloat(item.price.substring(0, 4)) * item.amount).toFixed(2)}</p>
                        <p>Amount: {item.amount}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BasketList;
