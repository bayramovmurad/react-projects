import React from 'react';

const Category = ({ categories, filterItems }) => {
    return (
        <div className='btn-container'>
            {categories.map((category) => {
                return (
                    <button
                        type='button'
                        className='btn'
                        key={category}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Category;