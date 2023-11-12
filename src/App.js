import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer.js";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ErrorPage from "./components/Error/ErrorPage";

function App() {
  return (
    <>
      <Header />

      <Welcome />
      <Login />
      <Signup />
      <Landing />
      <ErrorPage />

      <Footer />
    </>
  );
}

export default App;
