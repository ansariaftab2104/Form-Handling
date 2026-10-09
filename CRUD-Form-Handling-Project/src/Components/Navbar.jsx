import React from "react";

const Navbar = () => {
  return (
    <div className="bg-green-500 text-white w-full flex justify-between items-center px-10 py-3 sticky top-0">
      <div className="logo font-bold text-xl">Logo</div>
      <nav className="flex flex-row gap-8 cursor-pointer font-semibold">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Conatct Us</a>
        <a href="#">Service</a>
      </nav>
      <div className="btn">
        <button className="cursor-pointer bg-green-900 px-2 py-1 rounded outline-none">Create</button>
      </div>
    </div>
  );
};

export default Navbar;
