import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";


export const context = createContext();

export const AppContext = (props) => {
  const [loading, setloading] = useState(false);
  const [searchResults, setsearchResults] = useState(false);
  const [selectCatgerious, setselectCatgerious] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);

  useEffect(() => {
    fetchSelectedCategroyData(selectCatgerious);
  }, [selectCatgerious]);

  const fetchSelectedCategroyData = (query) => {
    setloading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setsearchResults(contents);
      setloading(false);
    });
  };

  return (
    <context.Provider
      value={{
        loading,
        setloading,
        searchResults,
        selectCatgerious,
        setselectCatgerious,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
