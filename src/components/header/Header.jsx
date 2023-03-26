import React from "react";

function Header() {
  return (
    <>
      <header className="h-[80px] shadow-md w-full fixed bg-white">
        <div className="container">
          <nav className="nav flex items-center justify-between py-[23px]">
            <div className="nav__title">
              <h1 className="text-[24px] font-extrabold">
                Where in the world?
              </h1>
            </div>
            <div className="nav__theme">
              <i className="bx bx-moon"></i>
              <button className="font-semibold ml-[10px]">Dark Mode</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
