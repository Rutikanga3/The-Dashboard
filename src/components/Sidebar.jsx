import { FiPackage } from "react-icons/fi";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdOutlineSegment } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function Sidebar() {
  const { theme } = useContext(ThemeContext);
  // Inline style to force remove border on small screens
  const forceNoBorder = {
    borderRight: 'none',
  };
  return (
    <div
      className={`flex flex-col shadow-lg border-r-0 md:border-r h-screen transition-all duration-300 xs:w-16 sm:w-20 md:w-64 fixed ${theme === "dark"
          ? "bg-gray-800 text-white md:border-gray-700"
          : "bg-white text-black md:border-gray-300"
        }`}
      style={forceNoBorder}
    >

      <div className='flex items-center gap-2 p-3'>
        <div className={`rounded-md h-12 w-12 flex items-center justify-center ${theme === "dark" ? "bg-primarycolor-500" : "bg-primarycolor-400"
          } text-white`}>
          <FiPackage className="text-2xl" size={35} />
        </div>
        <div className='hidden md:block'>
          <h1 className='font-bold text-2xl'>iHUZA</h1>
          <h3>INVENTORY</h3>
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-4 text-black text-md'>
        <div className={`flex items-center gap-2 p-3 rounded-md hover:${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
          }`}>
          <MdOutlineLaptopChromebook className="text-2xl text-gray-500" size={25} />
          <span className={`hidden sm:block md:block ${theme === "dark" ? "text-white" : "text-gray-500"
            }`}>Dashboard <span className='bg-gray-400 text-white rounded-full text-xs px-2 py-0.5 font-semibold ml-20 '>116</span></span>
        </div>
        <div className={`flex items-center gap-2 p-3 rounded-md hover:${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
          }`}>
          <LuUsers className={`text-2xl ${theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`} size={25} />
          <span className={`hidden sm:block md:block ${theme === "dark" ? "text-white" : "text-gray-500"
            }`}>Users <span className='bg-gray-400 text-white rounded-full text-xs px-2 py-0.5 font-semibold ml-30'>100</span></span>
        </div>
        <div className={`flex items-center gap-2 p-3 rounded-md hover:${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
          }`}>
          <FiPackage className={`text-2xl ${theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`} size={25} />
          <span className={`hidden sm:block md:block ${theme === "dark" ? "text-white" : "text-gray-500"
            }`}>Products<span className='bg-gray-400 text-white rounded-full text-xs px-2 py-0.5 font-semibold ml-25'>10</span></span>
        </div>
        <div className={`flex items-center gap-2 p-3 rounded-md hover:${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
          }`}>
          <MdOutlineSegment className={`text-2xl ${theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`} size={25} />
          <span className={`hidden sm:block md:block ${theme === "dark" ? "text-white" : "text-gray-500"
            }`}>Assignments</span>
        </div>
        <div className={`flex items-center gap-2 p-3 rounded-md hover:${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
          }`}>
          <FiLayers className={`text-2xl ${theme === "dark" ? "text-gray-300" : "text-gray-500"
            }`} size={25} />
          <span className={`hidden sm:block md:block ${theme === "dark" ? "text-white" : "text-gray-500"
            }`}>Categories

          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
