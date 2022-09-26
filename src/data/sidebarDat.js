import { FiShoppingBag } from "react-icons/fi";
import { ImLab } from "react-icons/im";
import { AiOutlineDashboard, AiOutlineDatabase } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { FaUserSecret, FaTasks } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { RiPlantLine } from "react-icons/ri";
import { IoStatsChartOutline } from "react-icons/io5";

const data = [
  {
    title: "Dashboard",
    icon: (
      <AiOutlineDashboard className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
    ),
    path: "/",
  },
  {
    title: "Users",
    icon: (
      <HiOutlineUsers className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
    ),
    path: "/users",
  },
  {
    title: "Agro Experts",
    icon: (
      <FaUserSecret className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
    ),
    childrens: [
      {
        title: "Statistics",
        icon: (
          <IoStatsChartOutline className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
        ),
        path: "/experts/statistics",
      },
    ],

    path: "/experts",
  },
  {
    title: "Laboratories",
    icon: (
      <ImLab className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
    ),

    path: "/laboratories",
  },
  {
    title: "Products",
    icon: (
      <FiShoppingBag className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
    ),
    childrens: [
      {
        title: "Statistics",
        icon: (
          <IoStatsChartOutline className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
        ),
        path: "/products/statistics",
      },
    ],
    path: "/products",
  },
  {
    title: "Categories",
    icon: (
      <BiCategory className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
    ),
    path: "/categories",
  },

  {
    title: "Kalio Data",
    icon: (
      <AiOutlineDatabase className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
    ),
    childrens: [
      {
        title: "Add Pack",
        icon: (
          <GoPackage className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
        ),
        path: "/add-packs",
      },
      {
        title: "Add Speciality",
        icon: (
          <FaTasks className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
        ),
        path: "/add-speciality",
      },
      {
        title: "Add Plant Type",
        icon: (
          <RiPlantLine className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" />
        ),
        path: "/add-plantype",
      },
    ],
    path: "/kalio-data",
  },
];

// [
//   {
//     "title": "General",
//     "icon": "bi-gear-fill",
//     "childrens": [
//       {
//         "title": "Home",
//         "icon": "bi-house-fill",
//         "path": "/"
//       },
//       {
//         "title": "About",
//         "icon": "bi-info-circle-fill",
//         "path": "/about"
//       },

//       {
//         "title": "FAQ",
//         "icon": "bi-question-circle-fill"
//       }
//     ]
//   },
//   {
//     "title": "General",
//     "icon": "bi-gear-fill",
//     "childrens": [
//       {
//         "title": "Home",
//         "icon": "bi-house-fill",
//         "path": "/"
//       },
//       {
//         "title": "About",
//         "icon": "bi-info-circle-fill",
//         "path": "/about"
//       },

//       {
//         "title": "FAQ",
//         "icon": "bi-question-circle-fill"
//       }
//     ]
//   },

//   {
//     "title": "Support",
//     "icon": "bi-question-circle-fill",
//     "path": "/support"
//   },
//   {
//     "title": "Report Bug",
//     "icon": "bi-bug",
//     "path": "/report-bug"
//   }
// ]

export default data;
