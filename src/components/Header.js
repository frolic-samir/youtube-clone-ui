import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faBell,
  faVideo,
  faTh,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header({ onClicked }) {
  return (
    <div className="header ">
      <div className="header-logocontainer">
        <FontAwesomeIcon
          className="header-baricon fontawesomeicon"
          onClick={onClicked}
          icon={faBars}
        />
        <img
          className="header-youtube-logo"
          src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh.jpg"
          alt="logo"
        />
      </div>
      <div className="input-container">
        <input className="input" type="text" />
        <button>
          <FontAwesomeIcon
            className="fontawesomeicon searchicon"
            icon={faSearch}
          />
        </button>
      </div>
      <div className="header-right-logo">
        <FontAwesomeIcon className="fontawesomeicon" icon={faVideo} />
        <FontAwesomeIcon className="fontawesomeicon" icon={faTh} />
        <FontAwesomeIcon className="fontawesomeicon" icon={faBell} />
        <FontAwesomeIcon className="fontawesomeicon" icon={faUserCircle} />
      </div>
    </div>
  );
}

export default Header;
