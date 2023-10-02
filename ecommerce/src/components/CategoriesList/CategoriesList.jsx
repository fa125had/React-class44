import Category from "../Category/Category";
import { ClipLoader } from "react-spinners";
import "../CategoriesList/categories-list.css";
import { useAPI } from "../../hooks/useAPI";

const CategoriesList = ({ selectedCategory, setSelectedCategory }) => {

  const endpoint = "https://fakestoreapi.com/products/categories";
  const {data: categories, loading, error} = useAPI(endpoint);

  const handleClick = ({ target }) => {
    if (selectedCategory === target.innerHTML) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(target.innerHTML);
    }
  };

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <nav className="categories-container">
        <ul className="categories-list">
          {categories && categories.map((category) => {
            return (
              <Category
                onClick={handleClick}
                key={category}
                category={category}
                selectedCategory={selectedCategory}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default CategoriesList;
