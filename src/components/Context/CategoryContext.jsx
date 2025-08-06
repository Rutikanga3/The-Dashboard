import React,{createContext,useState} from "react";
export const CategoryContext =createContext();

export const CategoryProvider= ({children})=>{
    const[categories,setCategories]=useState([
       { name: "MacBook Pro 16\"", category: "Laptops"},
        { name: "Dell XPS 13", category: "Laptops" },
        { name: "iPhone 15 Pro", category: "Mobile" },
        { name: "iPad Air", category: "Tablets" },
        { name: "Surface Pro 9", category: "Tablets"},  
    ]);
    return(
        <CategoryContext.Provider value={{categories,setCategories}}>
          {children}  
        </CategoryContext.Provider>
    )
}