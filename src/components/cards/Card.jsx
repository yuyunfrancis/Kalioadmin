import React from "react";

const Card = ({
  total,
  title,
  value,
  icon,
  statsIcon,
  color,
  bgColor,
  iconColor,
  time,
  rate,
}) => {
  return (
    <div className="shadow-lg rounded-2xl pt-8 px-8 pb-4 bg-white hover:bg-green-600 dark:bg-gray-800">
      <div className="flex items-center">
        <span className={`rounded-xl relative p-4 ${bgColor}`}>{icon}</span>
        <p className="text-md text-black dark:text-white ml-2">{title}</p>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
          {total}
          <span className="text-sm">{value}</span>
        </p>
        <div className={`flex items-center ${iconColor} text-sm`}>
          {statsIcon}
          <span>{rate}</span>
          <span className="text-gray-400">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
