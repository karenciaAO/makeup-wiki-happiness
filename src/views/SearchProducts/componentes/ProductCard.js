function ProductCard({product}) {

  const handleError = ({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="alternative.png";
}

  return (
    <div className="card"style={{width: "35rem"}} >
       <img src={product.image_link} alt="Image not found" onError={handleError} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.description}
        </p>
        <a href="#" className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
}

export default ProductCard