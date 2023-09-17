const Product = ({ imgURL, title }) => {
  return (
    <li className="product">
      <img className="product-image" src={imgURL} alt={title} title={title} />
      <p className="product-title">{title}</p>
    </li>
  );
};

export default Product;
