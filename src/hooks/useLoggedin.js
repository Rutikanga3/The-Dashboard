import { useContext } from "react";
import { LoggedinContext } from "../components/Context/LoggedinContext";

export const useLoggedin = () => {
  const context = useContext(LoggedinContext);
  if (!context) {
    throw new Error("useCheckLoggedIn must be used within a CheckLoggedInProvider");
  }
  return context;
};