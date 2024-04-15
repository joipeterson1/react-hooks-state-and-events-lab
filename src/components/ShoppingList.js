import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [filterBy, setFilterBy] = useState('All')

function handleSelectedCategory(event){
  setFilterBy(event.target.value)
}

const categoryDisplay = items.filter((item) => {
  if (filterBy === 'All'){
    return true

  } else {
    return item.category === filterBy
  }
  })

  const selectedCategory = categoryDisplay.map((item)=> {
    return(
      <Item key={item.id} name={item.name} category={item.category}/>
    )
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory}
      </ul>
    </div>
  );
}

export default ShoppingList;
/*
{items.map((item) => (
  <Item key={item.id} name={item.name} category={item.category} />
))}
*/