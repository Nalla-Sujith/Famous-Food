import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cuisine, setcuisine] = useState("indian");
  var food = {
    indian: ["Butter chicken", "Palak paneer", "Aloo Gobi"],
    china: ["Manchurian", "Chowmein", "Manchow soup"],
    Italian: ["Pizza", "Pasta", "Spaghetti", "Panini sandwich"],
    American: ["PanCakes", "Malts", "Malts", "Shakes"]
  };
  var clickhandler = (item) => {
    setcuisine(item);
  };
  var keys = Object.keys(food);
  return (
    <div className="App">
      <h1>Famous food of different cuisine🍔</h1>
      Click on anyone to see the list
      <hr />
      <div className="button-container">
        {keys.map((item) => {
          return (
            <span
              className="button-item"
              onClick={() => {
                clickhandler(item);
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="list-container">
        {food[cuisine].map((item) => {
          return <div className="list-item">{item}</div>;
        })}
      </div>
    </div>
  );
}
