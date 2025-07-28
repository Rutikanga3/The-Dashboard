import { FiPackage } from "react-icons/fi";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdOutlineSegment } from "react-icons/md";
import { FiLayers } from "react-icons/fi";

function Sidebar() {
  return (
    <div className='flex flex-col text-black shadow-lg border-r border-gray-300 h-screen bg-white transition-all duration-300 xs:w-16 sm:w-20 md:w-64 fixed'>
     
      <div className='flex items-center gap-2 p-3'>
        <div className='bg-primarycolor-400 text-white rounded-md h-12 w-12 flex items-center justify-center'>
          <FiPackage className="text-2xl" size={35} />
        </div>
        <div className='hidden md:block'>
          <h1 className='font-bold text-2xl'>iHUZA</h1>
          <h3>INVENTORY</h3>
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-4 text-black text-md'>
        <div className='flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md'>
          <MdOutlineLaptopChromebook className="text-2xl text-gray-500" size={25} />
          <span className='hidden sm:block md:block'>Dashboard</span>
        </div>
        <div className='flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md'>
          <LuUsers className="text-2xl text-gray-500" size={25} />
          <span className='hidden sm:block md:block'>Users</span>
        </div>
        <div className='flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md'>
          <FiPackage className="text-2xl text-gray-500" size={25} />
          <span className='hidden sm:block md:block'>Products</span>
        </div>
        <div className='flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md'>
          <MdOutlineSegment className="text-2xl text-gray-500" size={25} />
          <span className='hidden sm:block md:block'>Assignments</span>
        </div>
        <div className='flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md'>
          <FiLayers className="text-2xl text-gray-500" size={25} />
          <span className='hidden sm:block md:block'>Categories</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;