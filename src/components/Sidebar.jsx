import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsBriefcase,
} from "react-icons/bs";
import { SiOverleaf } from "react-icons/si";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import { BiCategory, BiCategoryAlt } from "react-icons/bi";
import { TbHexagons } from "react-icons/tb";
import Header from "./header/Header";

import SidebarItems from "./SidebarItems";
import items from "../data/sidebarDat";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const iconClass = "text-2xl block float-left";

  const Menus = [
    {
      title: "Dashboard",
      icon: <AiOutlineDashboard />,
      link: "/",
      spacing: true,
    },
    {
      title: "Users",
      submenu: true,
      submenuItems: [{ title: "Add User", link: "/add-user" }],
      icon: <HiOutlineUsers />,
      link: "/users",
    },
    {
      title: "Agronomists",
      submenu: true,
      submenuItems: [{ title: "Add User", link: "/add-user" }],
      icon: <BsBriefcase />,
      link: "/experts",
    },
    {
      title: "Laboratories",
      submenu: true,
      submenuItems: [{ title: "Add User", link: "/add-laboratory" }],
      icon: <TbHexagons />,
      link: "/laboratories",
    },
    {
      title: "Categories",
      submenu: true,
      submenuItems: [
        { title: "Main Category", link: "/main-category" },
        { title: "Sub Category", link: "/sub-category" },
      ],
      icon: <BiCategoryAlt />,
      link: "/Categories",
    },
  ];

  return (
    <>
      <aside
        className={`h-screen sticky top-0 overflow-y-auto bg-slate-900 ${
          open ? "w-64" : "w-20"
        } duration-300 p-5 pt-8 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-slate-900 text-3xl rounded-full absolute -right-2 top-9 border cursor-pointer hover:bg-slate-900 hover:text-white ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex items-center">
          <SiOverleaf
            className={`bg-transparent text-4xl text-green-700 cursor-pointer block float-left mr-4 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Kalio
          </h1>
        </div>
        {/* //search */}
        {/* <div
          className={`flex items-center rounded-md  bg-neutral-200 mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-gray-600 text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />

          <input
            type={"search"}
            placeholder="search"
            className={`text-base bg-transparent w-full text-gray-600 focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div> */}

        {/* menuitems */}
        {/* <div>
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-300 hover:text-slate-900 rounded-md ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}
                  onClick={() => (window.location.pathname = menu.link)}
                >
                  <span className="text-2xl block float-left">{menu.icon}</span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className=""
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </li>

                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className={`text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-300 hover:text-slate-900 rounded-md px-8`}
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div> */}
        <div className="pt-10">
          {items.map((item, index) => (
            <SidebarItems key={index} item={item} openSidebar={open} />
          ))}
        </div>
        {/* </div> */}
      </aside>
    </>
  );
};

export default Sidebar;
