import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const AuthLayout = ({ children }) => <>{children}</>; // No Navbar/Footer

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        <Route
          path="/productDetails/:productId"
          element={
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
