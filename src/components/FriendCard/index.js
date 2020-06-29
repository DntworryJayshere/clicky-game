import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={() => props.removeFriend(props.id)} className="remove">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
