import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const categories = [
    "Electronics",
    "Apparel",
    "Fashion",
    "Footwear",
    "Kids",
    "Homecare",
    "Skincare",
  ];

  async function getData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home container">
      <div className="row">
        <div className="col-12">
          <h2 className="home-title">Welcome to InstaShop</h2>
        </div>
        <div className="col-12">
          <div className="category-list">
            <div className="category-item">
              <Link to="/products/all">All products</Link>
            </div>

            {categories.map((category) => (
              <div className="category-item">
                <Link to={`/products/${category}`} className="text-white">
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <div className="category-title">
            Select a category to start shopping
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
