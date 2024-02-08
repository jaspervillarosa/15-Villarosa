import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function HomeNav() {
  return (
    <div>
      <div className="fixed-navbar">
        <a href="/">
          <div className="innerFixed-navbar">
            <FontAwesomeIcon className="navHouse" icon={faHouse} />
          </div>
        </a>
      </div>
    </div>
  );
}
