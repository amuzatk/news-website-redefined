import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <NavLink>
        <ul>
          <li>
            <News />
          </li>
          <li>
            <Politics />
          </li>
          <li>
            <Science />
          </li>
          <li>
            <Sport />
          </li>
          <li>
            <Entertainment />
          </li>
        </ul>
      </NavLink>
    </div>
  );
}
