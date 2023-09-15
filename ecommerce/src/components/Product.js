const Product = ({ imgURL, title }) => {
  return (
    <div>
      <img src={imgURL} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Product;
