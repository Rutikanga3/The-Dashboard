import { useContext } from "react";
import { UserContext } from "../components/Context/UserContext";

export const useUser = () =>{
    const context = useContext(UserContext)
    if (!context) {
    throw new Error("userUser must be used within a ProductProvider");
  }
  return  context;
}