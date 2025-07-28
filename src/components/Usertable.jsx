import React, { useContext } from 'react';
import Button from './Button';
import { ThemeContext } from './Context/ThemeContext';


const users = [
  {
    name: "John Smith", email: "john.smith@ihuza.com", role: "Admin", status: "Active", lastLogin: "2 hours ago",
  },
  {
    name: "Sarah Johnson", email: "sarah.j@ihuza.com", role: "Manager", status: "Active", lastLogin: "5 hours ago",
  },
  {
    name: "Michael Brown", email: "m.brown@ihuza.com", role: "Staff", status: "Active", lastLogin: "1 day ago",
  },
  {
    name: "Emily Davis", email: "emily.d@ihuza.com", role: "Staff", status: "Inactive", lastLogin: "3 days ago",
  },
  {
    name: "David Wilson", email: "d.wilson@ihuza.com", role: "Staff", status: "Active", lastLogin: "6 hours ago",
  },
  {
    name: "Lisa Anderson", email: "lisa.a@ihuza.com", role: "Manager", status: "Active", lastLogin: "30 min ago",
  },
  {
    name: "Robert Taylor", email: "r.taylor@ihuza.com", role: "Staff", status: "Active", lastLogin: "2 days ago",
  },
  {
    name: "Jennifer Miller", email: "j.miller@ihuza.com", role: "Staff", status: "Active", lastLogin: "4 hours ago",
  },
];

const roleColors = {
  Admin: "bg-purple-100 text-purple-700",
  Manager: "bg-blue-100 text-blue-700",
  Staff: "bg-gray-100 text-gray-700",
};

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
};

export default function Usertable() {
  const { theme = 'light' } = useContext(ThemeContext);
  
  return (
    <div className={` m-5  rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-wrap justify-between items-center mb-4 p-3">
        <h4 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Users</h4>
        <Button
          type="button"
          variant="primary"
          className="bg-primarycolor-600 text-white hover:bg-primarycolor-700 px-4 py-2 rounded-md font-semibold"
        >
          Add User
        </Button>
      </div>
      <div className="overflow-x-auto ">
        <table className={`min-w-full rounded-md shadow p-3 text-sm ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
          <thead className={`text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
            <tr className='border-gray-400'>
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4 hidden sm:table-cell">Role</th>
              <th className="py-2 px-4 hidden md:table-cell">Status</th>
              <th className="py-2 px-4 hidden lg:table-cell">Last Login</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className='border-gray-400'>
            {users.map((user, index) => (
              <tr key={index} className={`border-t ${theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-50'}`}>
                <td className="py-2 px-4 flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>👤</div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</div>
                  </div>
                </td>
                <td className="py-2 px-4 hidden sm:table-cell">
                  <span className={`text-xs px-2 py-1 rounded ${roleColors[user.role]}`}>{user.role}</span>
                </td>
                <td className="py-2 px-4 hidden md:table-cell">
                  <span className={`text-xs px-2 py-1 rounded ${statusColors[user.status]}`}>{user.status}</span>
                </td>
                <td className={`py-2 px-4 hidden lg:table-cell ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{user.lastLogin}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}