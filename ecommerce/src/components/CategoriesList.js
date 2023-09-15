import Category from "./Category";
import categories from "../fake-data/all-categories";

const CategoriesList = () => {
  return (
    <div>
      {categories.map((category, index) => {
        return <Category key={index} category={category} />;
      })}
    </div>
  );
};

export default CategoriesList;
