import React from "react";
import { Link } from "react-router-dom";

 const Nav = () => {
  return (
    <>
      <nav className=" border-gray-200 bg-[black]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className=" border border-1  text-[white] px-5 py-2 hover:bg-white hover:text-[black] text-[25px] cursor-pointer rounded-[10px]">
            <Link to='/'>Home</Link>
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex text-[white]">
              <li>
                <Link to="/watchlist" className=" text-[20px]  hover:border border-1 p-2 mx-2 rounded-[10px] bg-[black]"
                >
                
                  Whichlist {0}
                </Link>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[20px]  hover:border border-1 p-2 rounded-[10px]"
                >
                
                  Card {0}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
