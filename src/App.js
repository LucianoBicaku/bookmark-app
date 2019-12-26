import React from "react";
import Card from "./components/card";
import Data from "./teamplate/data.json";
import Menu from "./components/menu/menu";
import "./components/app.css";
function App() {
  return (
    <div>
      <section className="header">
        <h1>Bookmarks</h1>
      </section>
      <div className="mainDiv">
        {Data.map((cardDetail, index) => {
          return (
            <div className="item">
              <Card info={cardDetail} />
            </div>
          );
        })}
      </div>
      <Menu />
    </div>
  );
}

export default App;
