import React from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { Button } from "../components/ui/button";
import { useFirebase } from "../firebase/firebaseContext";
import { useSelector } from "react-redux";

function Header() {
  const { favoriteProducts } = useSelector((state) => state.favorite);

  const firebase = useFirebase();
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Products",
      slug: "/products",
      active: firebase.isLoggedIn,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: firebase.isLoggedIn,
    },
  ];

  const authItems = [
    {
      id: "favorite",
      name: (
        <div className="relative">
          <CiHeart size={20} />
          {favoriteProducts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {favoriteProducts.length}
            </span>
          )}
        </div>
      ),
      slug: "/favorite",
      active: firebase.isLoggedIn,
    },
    {
      id: "cart",
      name: (
        <div className="relative">
          <IoBag size={20} />
          {favoriteProducts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {favoriteProducts.length}
            </span>
          )}
        </div>
      ),
      slug: "/cart",
      active: firebase.isLoggedIn,
    },
    {
      id: "login",
      name: "Login",
      slug: "/login",
      active: !firebase.isLoggedIn,
    },
    {
      id: "signup",
      name: "Signup",
      slug: "/signup",
      active: !firebase.isLoggedIn,
    },
  ];

  return (
    <div className="flex justify-between items-center bg-[#34495E] px-10 py-3 text-white sticky top-0 z-50">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="hidden md:flex md:space-x-5">
        {navItems.map((navItem) =>
          navItem.active ? (
            <button onClick={() => navigate(navItem.slug)} key={navItem.name}>
              {navItem.name}
            </button>
          ) : null
        )}
      </div>

      <div className="hidden md:flex items-center space-x-5 ">
        {authItems.map((authItem) =>
          authItem.active ? (
            <button onClick={() => navigate(authItem.slug)} key={authItem.id}>
              {authItem.name}
            </button>
          ) : null
        )}
        {firebase.isLoggedIn && (
          <>
            <div className="flex space-x-2">
              <p>Welcome</p>
              <p className="text-teal-400">{firebase.displayName}</p>
            </div>
            <Button variant="destructive" onClick={firebase.logout}>
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
