import React , { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

const Firstcards = ({ title, description, icon,iconColor, bgColor }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`shadow-md rounded-lg p-6 flex items-center sm:items-start mb-10 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
      <div  className={`text-4xl mr-4 p-3 rounded-md ${
    bgColor ? bgColor : theme === "dark" ? "bg-gray-700" : "bg-gray-100"
  } ${iconColor}`}>{icon}</div>
      
      
      <div className="">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className={`${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>{description}</p>
      </div>
    </div>
  );
};

export default Firstcards;