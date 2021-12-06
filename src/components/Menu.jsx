import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/teachers"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          Teachers
        </NavLink>
        <NavLink
          to="/form"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          Form
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
