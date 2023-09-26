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
      try {
        setError(null);
        setLoading(true);

        const endpoint = "https://fakestoreapi.com/products/categories";
        const res = await fetch(endpoint);
        if (res.status !== 200) throw new Error("Error API Response");
        const categories = await res.json();

        console.log(categories);
        
        setCategories(categories);

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchAllCategories();
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
