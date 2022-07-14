import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MainNews from "./components/MainNews";
import Navbar from "./components/Navbar";

function App() {
  // Get dark Mode from local Storage
  const getDarkmode = () => {
    let darkMode = window.localStorage.getItem("dark-mode");

    if (darkMode) {
      return JSON.parse(window.localStorage.getItem("dark-mode"));
    }
    console.log(darkMode);
  };


  const [selectMode, setselectMode] = useState(getDarkmode());

  // save dark mode status in local storage
  useEffect(() => {
    window.localStorage.setItem("dark-mode", JSON.stringify(selectMode));
  }, [selectMode]);

  selectMode === "light"
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "#333333");

  // dark mode function
  const toggleon = () => {
    if (selectMode === "light") {
      setselectMode("dark");
    } else setselectMode("light");
  };

  return (
    <>
      <div className="App">
        <Navbar
          navTitle={"News Api"}
          screenMode={selectMode}
          darkModebtn={toggleon}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainNews
                key={"cnn"}
                setSource={"CNN News"}
                setNewscategory={"cnn"}
                screenMoode={selectMode}
              />
            }
          ></Route>
          <Route
            exact
            path="/bbcnews"
            element={
              <MainNews
                key={"bbc-news"}
                setSource={"BBC News"}
                setNewscategory={"bbc-news"}
                screenMoode={selectMode}
              />
            }
          ></Route>
          <Route
            exact
            path="/foxnews"
            element={
              <MainNews
                key={"fox-news"}
                setSource={"FOX News"}
                setNewscategory={"fox-news"}
                screenMoode={selectMode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
