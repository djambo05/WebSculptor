import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainPaper from "./Components/MainPaper";
import MainFooter from "./Components/MainFooter";
import AppleCard from "./Components/AppleCard";

function App() {
  return (
    <>
      <Header />
      <MainPaper />
      <AppleCard />
      <MainFooter />
    </>
  );
}

export default App;
