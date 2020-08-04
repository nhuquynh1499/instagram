import React from "react";

import "./style.css";

function Suggest(props) {
  const { user } = props;
  return (
    <div className="Suggest">
      <div className="item-Suggest">
        <div
          className="avatar-user"
          style={{ backgroundImage: `url(${user.avatar})` }}
        ></div>
        <div className="infor">
          <div className="name-user">{user.name}</div>
          <div className="relationship">Follows you</div>
        </div>
      </div>
      <button className="follow">Theo dõi</button>
    </div>
  );
}

export default Suggest;
