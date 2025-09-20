import React from "react";
import logo from "../../../assets/Logo.svg";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <a className="">Shop</a>
      </li>
      <li>
        <a className="">Order</a>
      </li>
      <li>
        <a className="">Order Review</a>
      </li>
      <li>
        <a className="">Manage Inventory</a>
      </li>
    </>
  );

  return (
    <nav>
      <div className="fixed left-0 right-0 navbar justify-between bg-black shadow-sm text-white lg:px-35 md:h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {menuItems}
            </ul>
          </div>

          <img src={logo} alt="ema-jho" />
        </div>
        {/* ===== larger device ===== */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
