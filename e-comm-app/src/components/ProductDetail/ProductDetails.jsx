import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = {
    id: 14332,
    name: "Sony Bravia TV",
    imageUrl:
      "https://shopatsc.com/cdn/shop/products/01-W830K-logo-v2_1024x1024@2x.jpg?v=1651239174",
    cost: 20000,
  };

  const isLoggedIn = true;

  function addToCart() {
    localStorage.setItem("cartItems", "TV");
  }

  function renderAddToCartButton() {
    if (isLoggedIn) {
      return (
        <div
          className="product-details-action btn btn-primary text-decoration-none"
          onClick={addToCart}
        >
          Add to cart
        </div>
      );
    } else {
      return (
        <Link
          className="product-details-action btn btn-success text-decoration-none"
          to="/login"
        >
          <span style={{ cursor: "pointer", textDecoration: "underline" }}>
            Login
          </span>{" "}
          to Add to cart
        </Link>
      );
    }
  }

  return (
    <div className="productDetails">
      <div className="container">
        <div className="row">
          <div className="product-details-wrapper col-8">
            <div className="product-img">
              <div>
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </div>
          </div>
          <div className="product-details-box col-4">
            <div className="product-name text-center">{product.name}</div>
            <div className="product-price fw-bold">
              <i className="fa fa-inr" /> {product.cost}
            </div>
            {product.description && (
              <div className="product-description">
                <div className="product-description-title">Description</div>
                <div className="product-description-data">
                  {product.description}
                </div>
              </div>
            )}
            {renderAddToCartButton()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
