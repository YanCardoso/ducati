import './index.scss'
import m1 from '../assets/M1.png'

function Bike() {
  return (
      <div className="bike-container">
            <span>797</span>
            <img src={m1} alt="Bike"/>
      </div>
  );
}

export default Bike;