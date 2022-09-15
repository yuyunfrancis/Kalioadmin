import React from "react";

// className="h-6 w-6 group-hover:text-gray-50"

// className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"

//  className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"

const StatsCard = ({ icon, icon1, title, users, text, rate, summary }) => {
  return (
    <div className="w-full p-2 lg:w-1/4 md:w-1/2">
      <div className="flex flex-col px-6 py-8 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
        <div className="flex flex-row items-center">
          <div className="px-3 py-3 bg-gray-300 mr-4 rounded-xl bg-opacity-30">
            {icon}
          </div>
          <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
            {`${title}`}
          </div>
        </div>
        <p className="text-sm sm:text-2xl xl:text-4xl font-medium text-gray-700 mt-4 group-hover:text-gray-50">
          {users}
          <span className="text-sm text-gray-500 ml-2">{text}</span>
        </p>
        <div className="flex flex-row group-hover:text-gray-200">
          <span>{icon1}</span>
          <p>{`${rate} %`}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
