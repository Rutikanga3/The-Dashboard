import { UserContext, useContext } from 'react';
import { CategoryContext } from '../components/Context/CategoryContext';

export const useCategory =() => {
    const context =useContext(CategoryContext);
    if (!context){
        throw new Error("useProduct must be used within a ProductProvider")
    }
    return context
}