import React, { useState } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faPlayCircle,
  faPlay,
  faVideo,
  faStoreAlt,
  faStopwatch,
  faArrowDown,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

function SideBar({ miniSidebar, hide }) {
  const [showSmallSidebar, setSmallSidebar] = useState(false);

  return (
    <div
      className={`${
        hide && !miniSidebar
          ? "minisidebar-hide"
          : miniSidebar
          ? "miniSidebar"
          : "sidebar"
      } `}
    >
      {miniSidebar && !hide && (
        <ul>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>
            <p className="mini-title-p">Home</p>
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faFire} />
            </span>
            <p className="mini-title-p">Trending</p>
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faPlayCircle} />
            </span>
            <p className="mini-title-p">Subscriptions</p>
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faPlay} />
            </span>
            <p className="mini-title-p">Library</p>
          </li>
        </ul>
      )}
      {!miniSidebar && !hide && (
        <ul>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>{" "}
            Home
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faFire} />
            </span>
            Trending
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faPlayCircle} />
            </span>
            Subscriptions
          </li>
          <hr />
          <li className="">
            <span>
              <FontAwesomeIcon icon={faPlay} />
            </span>
            Library
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faHistory} />
            </span>
            History
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faVideo} />
            </span>
            Your Videos
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faStoreAlt} />
            </span>
            Purchases
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faStopwatch} />
            </span>
            Watch Later
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            Show More
          </li>
          <hr />
          <li className="">
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faStopwatch} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faHistory} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faHistory} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faHistory} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faHistory} />
            </span>
            Show More
          </li>
          <li className="">
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            Show More
          </li>
        </ul>
      )}
    </div>
  );
}

export default SideBar;
