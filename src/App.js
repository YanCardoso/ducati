import Header from "./Header/index";

import Logo from "./Logo";
import Bike from "./Bike";
import Card from "./Card";

import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Logo />
      <Bike />
      <Card />
    </div>
  );
}

export default App;
