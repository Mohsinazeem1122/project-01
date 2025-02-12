import React from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { Button } from "../components/ui/button";

function Header() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Products",
      slug: "/products",
    },
    {
      name: "Contact",
      slug: "/contact",
    },
  ];

  const authItems = [
    {
      id: "favorite",
      name: <CiHeart />,
      slug: "/favorite",
    },
    {
      id: "cart",
      name: <IoBag />,
      slug: "/cart",
    },
    {
      id: "login",
      name: "Login",
      slug: "/login",
    },
    {
      id: "signup",
      name: "Signup",
      slug: "/signup",
    },
  ];

  return (
    <div className="flex justify-between items-center bg-[#34495E] px-10 py-3 text-white sticky top-0 z-50">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="hidden md:flex md:space-x-5">
        {navItems.map((navItem) => (
          <button onClick={() => navigate(navItem.slug)} key={navItem.name}>
            {navItem.name}
          </button>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-5 ">
        {authItems.map((authItem) => (
          <button onClick={() => navigate(authItem.slug)} key={authItem.id}>
            {authItem.name}
          </button>
        ))}
        <Button variant="destructive">Logout</Button>
      </div>
    </div>
  );
}

export default Header;
