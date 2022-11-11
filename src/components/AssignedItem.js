import React from "react";

function AssignedItem({ name }) {
  return (
    <div className="flex justify-start items-center">
      <div class="relative w-[40px] h-[40px]">
        <img
          class="rounded-full border border-gray-100 shadow-sm"
          src="https://randomuser.me/api/portraits/women/81.jpg"
          alt="user image"
        />
      </div>
      <h4 className="ml-4 text-sm">{name}</h4>
    </div>
  );
}

export default AssignedItem;
