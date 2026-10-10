import React from "react";

const Card = ({user}) => {
  return (
    <div className="w-60 bg-zinc-500 rounded-md overflow-hidden flex flex-wrap gap-5 p-2 text-white">
      <div className="image w-full h-70">
        <img
          className="w-full h-full object-cover rounded"
          src={user.image}
          alt=""
        />
      </div>
      <div className="text">
        <h2 className="font-semibold text-xl">{user.name}</h2>
        <h3 className="font-semibold text-lg">{user.email}</h3>
        <h3 className="font-semibold">{user.phone}</h3>
      </div>
      <div className="btns w-full flex justify-between cursor-pointer">
        <div className="update-btn bg-amber-500 px-2 py-1 rounded">Update</div>
        <div className="delete-btn bg-red-500 px-2 py-1 rounded">Delete</div>
      </div>
    </div>
  );
};

export default Card;
