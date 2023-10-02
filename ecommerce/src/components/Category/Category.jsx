import "../Category/category.css";

const Category = ({ category, onClick, selectedCategory }) => {
  const isSelected = category === selectedCategory;

  return (
    <li
      onClick={onClick}
      className={`category ${isSelected ? "selected" : ""}`}
    >
      {category}
    </li>
  );
};

export default Category;
