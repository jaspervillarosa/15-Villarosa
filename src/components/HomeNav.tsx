import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function HomeNav() {
  return (
    <div>
      <a href="/">
        <div className="fixed-navbar">
          <div className="innerFixed-navbar">
            <a href="/">
              <FontAwesomeIcon className="navHouse" icon={faHouse} />
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}
