import { Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";

import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";
import ProductDetails from "../ProductDetail/ProductDetails";
import ProductList from "../ProductList/ProductList";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:categoryName" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product/:productId/details"
          element={<ProductDetails />}
        />
        <Route path="/confirm-payment" element={<PaymentConfirmation />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
