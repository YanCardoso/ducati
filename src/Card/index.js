import "./index.scss";
import { bikes } from "../Details.js";

function Card() {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="vibe-text">
          <span>Fresh vibes.</span>
          <span>Sporty soul.</span>
        </div>
        <div className="details-container">
          <div className="itens">
            <h2>Displacement</h2>
            <span>{bikes.details.displacement}</span>
          </div>

          <div className="itens">
            <h2>Horse Power</h2>
            <span>{bikes.details.horsePower}</span>
          </div>

          <div className="itens">
            <h2>Torque</h2>
            <span>{bikes.details.torque}</span>
          </div>

          <div className="itens">
            <h2>Dry Weight</h2>
            <span>{bikes.details.dryWeight}</span>
          </div>

          <div className="itens">
            <h2>Seat Height</h2>
            <span>{bikes.details.seatHeight}</span>
          </div>

          <div className="itens">
            <h2>Safety</h2>
            <span>{bikes.details.safety}</span>
          </div>
        </div>
        <div className="color-container">
        <button className="btn1"></button>
        <button className="btn2"></button>
        <button className="btn3"></button>
      </div>
      </div>
    </div>
  );
}

export default Card;
