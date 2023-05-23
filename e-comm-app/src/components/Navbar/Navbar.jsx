import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const user = null;

  function logoutHandler() {
    console.log("Logout clicked");
  }

  return (
    <div className="header fixed-top">
      <div className="container">
        <div className="row">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/" className="text-decoration-none">
                InstaShop
              </Link>
            </div>
            <div className="user-actions">
              <Link to="/cart">Cart</Link>
              <div className="user-intro">{user ? user : "Guest"}</div>
              {user ? (
                <div className="logout-btn" onClick={logoutHandler}>
                  Logout
                </div>
              ) : (
                <div className="login-btn">
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
