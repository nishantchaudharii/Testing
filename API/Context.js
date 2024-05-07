import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getNewsAPI2, getSourceAPI } from "./api";
export const NewsContext = createContext();
const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState();
  const [index, setIndex] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const fetchNews = async () => {
    const { data } = await axios.get(getNewsAPI2());
    setNews(data);
    setIndex(1);
  };

  // const fetchNewsfromSource = async () => {
  //   try {
  //     const data = await axios.get(getSourceAPI(source));
  //     setNews(data);
  //     setIndex(1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchNews();
  }, [category]);

  // useEffect(() => {
  //   fetchNewsfromSource();
  // }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        setCategory,
        index,
        setIndex,
        setSource,
        darkTheme,
        setDarkTheme,
        fetchNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
