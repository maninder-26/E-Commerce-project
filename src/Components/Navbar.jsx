import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin, ShoppingCart, Menu, X } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { ShopingContext } from "../Context/ShopContext";

const Navbar = ({ Location }) => {
  const { login, logout, isAuthenticated, user } = useKindeAuth();
  const { getTotalCartItems } = useContext(ShopingContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo + Location */}
          <div className="flex items-center gap-4">

            <Link to="/">
              <h1 className="text-3xl font-bold">
                <span className="text-red-600 font-serif">Z</span>epto
              </h1>
            </Link>

            <div className="hidden md:flex items-center gap-2 text-gray-700">

              <MapPin className="text-red-500 w-5 h-5" />

              {Location ? (
                <div className="leading-4">
                  <p className="font-semibold text-sm">
                    {Location.state_district}
                  </p>

                  <p className="text-xs text-gray-500">
                    {Location.country}
                  </p>
                </div>
              ) : (
                <span className="text-sm font-medium">
                  Add Address
                </span>
              )}

              <FaCaretDown />

            </div>
          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">

            <NavLink to="/">Home</NavLink>

            <NavLink to="/Men">Men</NavLink>

            <NavLink to="/Women">Women</NavLink>

            <NavLink to="/Kids">Kids</NavLink>

            {isAuthenticated ? (
              <>
                <span className="font-semibold">
                  Hi, {user?.given_name}
                </span>

                <button
                  onClick={logout}
                  className="bg-black text-white px-5 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={login}
                className="bg-black text-white px-5 py-2 rounded-lg"
              >
                Login
              </button>
            )}

            <Link to="/cart" className="relative">

              <ShoppingCart className="w-7 h-7" />

              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {getTotalCartItems()}
              </span>

            </Link>

          </div>

          {/* Mobile Right */}

          <div className="flex lg:hidden items-center gap-5">

            <Link to="/cart" className="relative">

              <ShoppingCart className="w-7 h-7" />

              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {getTotalCartItems()}
              </span>

            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="lg:hidden pb-5 border-t">

            <div className="flex flex-col gap-4 pt-4">

              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>

              <NavLink to="/Men" onClick={() => setMenuOpen(false)}>
                Men
              </NavLink>

              <NavLink to="/Women" onClick={() => setMenuOpen(false)}>
                Women
              </NavLink>

              <NavLink to="/Kids" onClick={() => setMenuOpen(false)}>
                Kids
              </NavLink>

              {Location && (
                <div className="text-sm text-gray-600">
                  {Location.state_district}, {Location.country}
                </div>
              )}

              {isAuthenticated ? (
                <>
                  <p className="font-semibold">
                    Hi, {user?.given_name}
                  </p>

                  <button
                    onClick={logout}
                    className="bg-black text-white py-2 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={login}
                  className="bg-black text-white py-2 rounded"
                >
                  Login
                </button>
              )}

            </div>

          </div>

        )}

      </div>
    </nav>
  );
};

export default Navbar;