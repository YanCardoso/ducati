import "./index.scss";
import { bikes } from "../Details.js";

function Card({ setBike, bike }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="details-container">
          <div className="details">
            <div className="itens">
              <h2>Displacement</h2>
              <span>{bikes[bike].details.displacement}</span>
            </div>

            <div className="itens">
              <h2>Horse Power</h2>
              <span>{bikes[bike].details.horsePower}</span>
            </div>

            <div className="itens">
              <h2>Torque</h2>
              <span>{bikes[bike].details.torque}</span>
            </div>

            <div className="itens">
              <h2>Dry Weight</h2>
              <span>{bikes[bike].details.dryWeight}</span>
            </div>

            <div className="itens">
              <h2>Seat Height</h2>
              <span>{bikes[bike].details.seatHeight}</span>
            </div>

            <div className="itens">
              <h2>Safety</h2>
              <span>{bikes[bike].details.safety}</span>
            </div>
          </div>
        </div>
        <div className="color-container">
          <div className="colors">
            <button
              className="btn1"
              onClick={() => {
                setBike(0);
              }}
            ></button>
            <button
              className="btn2"
              onClick={() => {
                setBike(1);
              }}
            ></button>
            <button
              className="btn3"
              onClick={() => {
                setBike(2);
              }}
            ></button>
          </div>
        </div>
        <div className="vibe-container">
          <div className="vibe">
            <span>Fresh vibes.</span>
            <span>Sporty soul.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
