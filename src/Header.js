import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      {/* <h2>I am a header</h2> */}
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      {/* head logo */}
      <img
        className="header__logo"
              src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
        alt=""
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icons" />
      </IconButton>
    </div>
  );
}

export default Header;
