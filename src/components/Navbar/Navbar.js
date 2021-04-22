import React from "react";

import "./Navbar.css";

const Navbar = () => {
  const handleClickNotif = () => {};
  const handleClickSettings = () => {};
  return (
    <div className="nb__container">
      <div className="nb__content_container">
        <div className="nb__content_logo">
          <div className="nb__logo_icon" />
        </div>
        <div className="nb__content_user">
          <div className="nb__logo_dot" />
          <div className="nb__subcontent_user">
            <div className="nb__content_name">Reinhart H.</div>
            <div className="nb__content_location">Kemang, Jakarta</div>
          </div>
          <div className="nb__logo_chevron" />
        </div>
      </div>

      <div className="nb__content_right">
        <div className="nb__content_search">
          <input type="text" placeholder="Search text" />
          <div className="nb__logo_search" />
        </div>

        <div onClick={handleClickNotif} className="nb__logo_notif" />
        <div onClick={handleClickSettings} className="nb__logo_settings" />
      </div>
    </div>
  );
};

export default Navbar;
