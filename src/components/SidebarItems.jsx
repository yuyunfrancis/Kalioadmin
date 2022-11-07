import { info } from "autoprefixer";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBriefcase, BsChevronDown } from "react-icons/bs";

const SidebarItems = ({ item, openSidebar = true }) => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const active =
    "bg-slate-300 text-gray rounded-lg flex items-center p-2 mt-3 text-base";
  const activeDd =
    "bg-slate-300 text-gray rounded-lg flex items-center p-2 mt-3 text-base";
  if (item.childrens) {
    return (
      <div>
        <ul className="space-y-2">
          <li className=" flex items-center p-2 mt-3 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            {item.icon}
            <span
              onClick={() => (window.location.pathname = item.path)}
              className={`flex-1 ml-3 text-left whitespace-nowrap cursor-pointer duration-200 ${
                !openSidebar && "hidden"
              }`}
            >
              {item.title}
            </span>
            <BsChevronDown
              className={`w-6 h-6 ${!openSidebar && "hidden"}`}
              onClick={() => setOpen(!open)}
            />
          </li>
          {open && (
            //   <ul className="hidden py-2 space-y-2">
            <div className="py-2 space-y-2 pl-11">
              {item.childrens.map((child, index) => (
                <SidebarItems key={index} item={child} />
              ))}
            </div>
            //   </ul>
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => (window.location.pathname = item.path)}
        className={`  ${
          window.location.pathname == item.path
            ? active
            : "flex items-center p-2 mt-3 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        } `}
      >
        {item.icon}
        <span className={`ml-3 ${!openSidebar && "hidden"}`}>{item.title}</span>
      </button>
    );
  }
};

export default SidebarItems;
