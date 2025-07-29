import React,{useState,createContext} from "react";

export const UserContext = createContext();

export const  UserProvider = ({children}) => {
    const[users,setUsers]= useState([
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
]);

return(
    <UserContext.Provider value={{users,setUsers}}>
        {children}
    </UserContext.Provider>
)
}