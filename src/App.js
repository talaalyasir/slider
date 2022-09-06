import React from "react";
import Home from "./components/home"
import About from "./components/about"
import Services from "./components/services"
import Portfolio from "./components/Portfolio "
import PortfolioChild from "./components/PortfolioChild"





function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <PortfolioChild/>

    </div>
  );
}

export default App;
