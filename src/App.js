import Header from "./Header/index";

import "./App.scss";
import Logo from "./Logo";
import Bike from "./Bike";
import Card from "./Card";

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
