import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const menuList = [
  "인기",
  "상의",
  "아우터",
  "바지",
  "원피스",
  "스커트",
  "스니커즈",
  "신발",
];

function Navbar({ authenticate, setAuthenticate }) {
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
      e.target.value = "";
    }
  };
  return (
    <div>
      <div className="nav-header">
        <div className="toggle-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)} className="login-menu">
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")} className="login-menu">
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img
            width={120}
            src="https://dimg.donga.com/wps/NEWS/IMAGE/2021/06/03/107254622.2.jpg"
            alt="img"
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, idx) => (
            <li key={idx}>
              <Link to="#">{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input onKeyUp={onCheckEnter} type="text" placeholder="상품검색" />
      </div>
    </div>
  );
}

export default Navbar;
