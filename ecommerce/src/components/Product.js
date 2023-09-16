const Product = ({ imgURL, title }) => {
  return (
    <li className="product">
      <img className="product-image" src={imgURL} alt={title} />
      <h2 className="product-title">{title}</h2>
    </li>
  );
};

export default Product;
