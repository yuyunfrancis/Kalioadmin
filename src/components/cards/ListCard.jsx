import React from "react";

const ListCard = ({ icon, item, price, date }) => {
  return (
    <div class="flex items-center mb-6 rounded justify-between">
      <span class="rounded-lg bg-green-600 p-3 text-white text-xl">{icon}</span>
      <div class="flex items-center w-full justify-between">
        <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
          <p class="dark:text-white">{item}</p>
          <p class="text-gray-400">{date}</p>
        </div>
        <div>
          <span class="text-yellow-400 font-medium ml-2">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
