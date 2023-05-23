import { Link, useParams } from "react-router-dom";
import Filter from "./Filter";
import "./ProductList.css";

const ProductList = () => {
  const { categoryName } = useParams();
  const productList = [
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

  return (
    <div className="productList">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-4">
            <Filter />
          </div>
          <div className="col-8">
            <h2 className="text-center product-category-title">
              Showing results for {categoryName} category
            </h2>
            <div className="product-list-wrapper">
              <div className="product-list-box">
                {productList.map((product) => (
                  <div className="product-item">
                    <Link to={`/product/${product.id}/details`}>
                      <div className="product-img">
                        <img src={product.imageUrl} alt={product.name} />
                      </div>
                      <div className="product-name text-center">
                        {product.name}
                      </div>
                      <div className="product-price">
                        <i className="fa fa-inr">{product.cost}</i>
                      </div>
                      <div className="product-description">
                        {product.description}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
