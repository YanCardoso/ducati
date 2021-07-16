import './index.scss'
import { bikes } from '../Details';

function Bike({bike}) {
  return (
      <div className="bike-container">
            <span>{bikes[bike].model}</span>
            <img src={bikes[bike].img} alt="Bike"/>
      </div>
  );
}

export default Bike;