import React from "react";
import logo from "./../../assets/img/logo.svg";
// Использовал модульные стили, т.к. не понимаю как работать со стелевыми компонентами...
// у которых нет Автозаполнения, подсказок, и непонятно как использовать псевдоклассы
import style from "./Home.module.css";

export default (props: any) => {
  return (
    <div className={style.App}>
      <header className={style.App_header}>
        <div className={style.nav}>
          <button onClick={() => props.logOut()}>Выйти</button>
        </div>
        <img src={logo} className={style.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={style.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
