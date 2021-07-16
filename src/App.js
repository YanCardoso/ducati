import Header from "./Header/index";

import Logo from "./Logo";
import Bike from "./Bike";
import Card from "./Card";

import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [bike, setBike] = useState(0)


  function changeBike(response) {
    setBike(response)
  }

  useEffect(() => {
    
  }, [bike]);

  return (
    <div className="app-container">
      <Header />
      <Logo />
      <Bike bike={bike}/>
      <Card setBike={changeBike} bike={bike}/>
    </div>
  );
}

export default App;
