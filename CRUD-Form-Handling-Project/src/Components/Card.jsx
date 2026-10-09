import React from "react";

const Card = () => {
  return (
    <div className="w-60 bg-zinc-500 rounded-md overflow-hidden flex flex-wrap gap-5 p-2 text-white">
      <div className="image w-full h-70">
        <img
          className="w-full h-full object-cover rounded"
          src="https://images.unsplash.com/photo-1782054329865-50d280a119f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="text">
        <h2 className="font-semibold text-xl">Name</h2>
        <h3 className="font-semibold text-lg">Email</h3>
        <h3 className="font-semibold">Phone Number</h3>
      </div>
      <div className="btns w-full flex justify-between cursor-pointer">
        <div className="update-btn bg-amber-500 px-2 py-1 rounded">Update</div>
        <div className="delete-btn bg-red-500 px-2 py-1 rounded">Delete</div>
      </div>
    </div>
  );
};

export default Card;
