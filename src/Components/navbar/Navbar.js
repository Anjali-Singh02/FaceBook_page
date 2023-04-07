import React from "react";
import "./navbar.css";
import {
  SearchOutlined,
  UserOutlined,
  MessageOutlined,
  BellFilled
} from "@ant-design/icons";
export const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="navbarCenter">
        <div className="searchBar"></div>
        <SearchOutlined />
        <input type="text" placeholder="Search..." className="searchInput" />
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <div className="navLink">Homepage</div>
          <div className="navLink">Timeline</div>
        </div>
        <div className="navIcons">
          <div className="navIconItem">
            <UserOutlined />
            <span className="navIconBadge">1</span>
          </div>
          <div className="navIconItem">
          <MessageOutlined />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navIconItem">
          <BellFilled />
            <span className="navIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};
