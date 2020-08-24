import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";

function App() {
  const [sb, setSb] = useState(false);
  const [hideSidebar, setHide] = useState(false);
  const sidebarClicked = () => {
    setSb(!sb);
  };
  useEffect(() => {
    window.addEventListener("resize", (resize) => {
      if (resize.target.innerWidth <= 780) {
        setHide(true);
        setSb(false);
      } else if (
        resize.target.innerWidth > 780 &&
        resize.target.innerWidth <= 1300
      ) {
        setSb(true);
        setHide(false);
      } else if (resize.target.innerWidth > 1300) {
        setSb(false);
        setHide(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <Header onClicked={sidebarClicked} />
      <div className="app_page">
        <SideBar miniSidebar={sb} hide={hideSidebar} />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
