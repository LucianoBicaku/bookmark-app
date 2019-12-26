import React from "react";
import "./card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="card-inner">
        <div
          className="card-front"
          style={{
            background: "url('https://i.picsum.photos/id/1033/300/300.jpg')"
          }}
        >
          <h3>{props.info.name}</h3>
        </div>
        <div className="card-back">
          <div className="card-back-content">
            <h1>emri: {props.info.name}</h1>
            <p>Description: {props.info.description}</p>
            <p>Date: {props.info.date}</p>
            <p>{props.info.tags}</p>
          </div>

          <input type="checkbox" name="" />
          <div className="toggle fas fa-cog"></div>
          <div className="settings">
            <h1>Modify Bookmark</h1>
            <section>
              <button>
                Add to fav
                <p className="fas fa-star"></p>
              </button>
              <button>
                Change
                <p className="fas fa-sliders-h"></p>
              </button>
              <button>
                Set Reminder
                <p className="far fa-calendar-alt"></p>
              </button>
              <button>
                Delete<p className="far fa-trash-alt"></p>
              </button>
            </section>
            <div className="btn_wrap">
              <span>Share</span>
              <div className="container">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-github"></i>
                <i className="far fa-clipboard"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
