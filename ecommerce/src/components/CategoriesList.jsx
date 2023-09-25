import Category from "./Category";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const CategoriesList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const endpoint = "https://fakestoreapi.com/products/categories";

      try {
        const res = await fetch(endpoint);

        const categories = await res.json();

        setCategories(categories);

        console.log("category state: " + categories);
      } catch (error) {
        setError(error);
      }
    };

    try {
      setLoading(true);
      fetchAllCategories();
      setCategories(categories);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

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

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <nav className="categories-container">
          <ul className="categories-list">
            {categories.map((category, index) => {
              return (
                <Category
                  onClick={handleClick}
                  key={index}
                  category={category}
                  selectedCategory={selectedCategory}
                />
              );
            })}
          </ul>
        </nav>
      )}

      <ProductsList selectedCategory={selectedCategory} />
    </>
  );
};

export default CategoriesList;
