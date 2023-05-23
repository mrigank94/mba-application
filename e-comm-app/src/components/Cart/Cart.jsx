import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const productDetails = [
    {
      id: 14332,
      name: "Sony Bravia TV",
      imageUrl:
        "https://shopatsc.com/cdn/shop/products/01-W830K-logo-v2_1024x1024@2x.jpg?v=1651239174",
      cost: 20000,
    },
    {
      id: 1221,
      name: "Keyboard",
      imageUrl: "https://m.media-amazon.com/images/I/61fl+k9O-FL._SX679_.jpg",
      cost: 1000,
    },
    {
      id: 32233,
      name: "Macbook",
      imageUrl:
        "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY436_FMwebp_QL65_.jpg",
      cost: 120000,
    },
    {
      id: 14335,
      name: "Redmi Smart LED TV",
      imageUrl: "https://m.media-amazon.com/images/I/71L-lTQnJiL._SX679_.jpg",
      cost: 12999,
    },
    {
      id: 14334,
      name: "LG Smart LED TV",
      imageUrl:
        "https://m.media-amazon.com/images/I/31CqviMioCL._SX300_SY300_QL70_FMwebp_.jpg",
      cost: 12591,
    },
  ];
  const orderDetails = {
    cost: 150000,
  };

  function removeProductFromCart(productId) {
    console.log(`Remove ${productId} from cart in DB`);
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          <div className="cart-title">My insta cart</div>
          <div className="cart-wrapper">
            <div className="order-details">
              <div className="order-details-title">Order details</div>
              {productDetails.length !== 0 ? (
                <>
                  {productDetails.map((product) => (
                    <div className="order-details-product" key={product.id}>
                      <div className="order-details-product-img">
                        <img src={product.imageUrl} alt={product.name} />
                      </div>
                      <div className="order-details-product-data">
                        <div>{product.name}</div>
                        <div>
                          <i className="fa fa-inr"></i>
                          {product.cost.toFixed(2)}
                        </div>
                      </div>
                      <div className="order-details-product-actions">
                        <div
                          className="order-details-product-remove btn btn-danger"
                          onClick={() => removeProductFromCart(product.id)}
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="no-items-cart">Your cart is empty!</div>
              )}

              {productDetails.length > 0 && (
                <div className="price-details mt-5">
                  <div className="price-details-box">
                    <div className="price-details-title">Price Details</div>
                    <div className="price-details-data">
                      <div className="price-details-item">
                        <div>Price</div>
                        <div>
                          <i className="fa fa-inr" /> {orderDetails.cost}
                        </div>
                      </div>
                      <div className="price-details-item">
                        <div>Discount</div>
                        <div>
                          <i className="fa fa-inr" /> 0
                        </div>
                      </div>
                      <div className="price-details-item">
                        <div>Delivery Charges</div>
                        <div>FREE</div>
                      </div>
                      <div className="price-details-item">
                        <div>Total</div>
                        <div>
                          <i className="fa fa-inr" /> {orderDetails.cost}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="actions-container">
                    <Link
                      className="continue-shopping-btn btn btn-secondary"
                      to="/"
                    >
                      Continue shopping
                    </Link>
                    <Link
                      className="checkout-btn btn btn-success"
                      to="/checkout"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
