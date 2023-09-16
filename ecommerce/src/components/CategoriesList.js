import Category from "./Category";
import categories from "../fake-data/all-categories";
import ProductsList from "./ProductsList";
import { useState } from "react";

const CategoriesList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = ({ target }) => {
    if ((selectedCategory === target.innerHTML)) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(target.innerHTML);
    }
  };

  return (
    <>
      <nav className="categories-container">
        <ul className="categories-list">
          {categories.map((category, index) => {
            return (
              <Category onClick={handleClick} key={index}
              category={category}
              selectedCategory={selectedCategory} />
            );
          })}
        </ul>
      </nav>
      <ProductsList selectedCategory={selectedCategory} />
    </>
  );
};

export default CategoriesList;
