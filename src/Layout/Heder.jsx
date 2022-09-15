import React from "react";
import "../styles/Heder.scss";

const Heder = ({ setLoginToggle, onLoginToggle }) => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/home">찾아오는길</a>
              </li>
              <li>
                <a href="/about">게시판</a>
              </li>
              <li>
                <a href="/event">채팅창</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <div className="dasdasd">
            <a href="/" class="">
              집에 가고싶은 사람!!!!!!!
            </a>
          </div>
        </div>

        <div class="navbar-end">
          <button
            onClick={() => {
              onLoginToggle();
            }}
            class="btn btn-ghost"
          >
            로그인
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Heder;
