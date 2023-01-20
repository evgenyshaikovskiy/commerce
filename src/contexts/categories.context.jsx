import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.js";

export const CategoriesContext = createContext({
  categoryMap: {},
});

export const CategoriesContextProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoryMap(categoriesMap);
      console.log(categoriesMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
