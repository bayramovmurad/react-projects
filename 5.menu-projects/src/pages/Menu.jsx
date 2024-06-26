import MenuLists from "../components/MenuLists";
import menu from "../data/menu";
import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import Category from "../components/Category";
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const Menu = () => {
  const [data, setData] = useState(menu);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(menu);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === 'all') {
      setData(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setData(newItems);
  };


  const filterData = useCallback(() => {


    const filtered = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredData(filtered);
  }, [data, search]);

  const debouncedFilterData = useCallback(_.debounce(filterData, 500), [filterData]);

  useEffect(() => {
    debouncedFilterData();
  }, [search, debouncedFilterData]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Category categories={categories} filterItems={filterItems} />
      {
        filteredData.map((item) => (
          <MenuLists key={item.id} item={item} />
        ))
      }
    </div>
  );
};

export default Menu;
