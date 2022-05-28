import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="flex">
            <Link to="/" className="h1">
              <h1>Shop List App</h1>
            </Link>
            <div className="flex">
              <NavLink
                to="/add"
                className={(isActive) =>
                  "btn active" + (!isActive ? "btn" : "")
                }
              >
                Add Shop
              </NavLink>
              <NavLink
                to="/view"
                className={(isActive) =>
                  "btn active" + (!isActive ? "btn" : "")
                }
              >
                View Shops
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
