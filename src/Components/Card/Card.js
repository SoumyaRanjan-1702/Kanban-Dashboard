// import React from "react";
// import "./Card.css";

// function Card() {
//   return <div className="card">Card</div>;
// }

// export default Card;

import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, title, label, user, status, icon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-id">{id}</div>
        <img src={user} alt="user" className="card-avatar" />
        {/* <span className="card-badge">Badge</span> */}
      </div>
      <div className="card-title">{title}</div>
      <div className="card-icon">
        <img src={icon} alt="icon" className="icon" />
        {label}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Card;
