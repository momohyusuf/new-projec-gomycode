import React from "react";
import { ClockCircleTwoTone } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    "/",
    "business",
    "education",
    "entertainment",
    "sport",
    "technology",
  ];
  return (
    <nav className="shadow-md py-3">
      <div className=" px-2 flex items-center justify-between  gap-2 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <h3 className="text-blue-500">New O'clock</h3>
          <ClockCircleTwoTone />
        </div>

        <div>
          {links.map((item) => (
            <NavLink
              key={item}
              className="font-semibold mr-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"
              to={item}
            >
              {" "}
              {item === "/" ? "Home" : item}{" "}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
