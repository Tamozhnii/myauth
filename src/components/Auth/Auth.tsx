import React from "react";
// Использовал модульные стили, т.к. не понимаю как работать со стелевыми компонентами,
// у которых нет Автозаполнения, подсказок, и непонятно как использовать псевдоклассы
import style from "./Auth.module.css";

export default (props: any) => {
  let onChangeEmail = (e: any) => {
    let email = e.target.value;
    props.setEmail(email);
  };
  let onChangePassword = (e: any) => {
    let password = e.target.value;
    props.setPassword(password);
  };
  let onLogin = () => {
    let a = localStorage.getItem("emailValid");
    let b = localStorage.getItem("passwordValid");
    props.isLogin(a && b ? true : false);
  };

  return (
    <form className={style.root}>
      <span className={style.el}>Вход</span>
      <input
        type="email"
        placeholder="Email"
        autoFocus
        required
        className={style.email}
        value={props.emailValue}
        onChange={onChangeEmail}
      />
      <span
        className={`${style.prompt} ${style.prompt_email}`}
        hidden={localStorage.getItem("emailValid") === "1" ? true : false}
      >
        Email должен содержать символ @ и в конце после . от 2 до 10 символов
      </span>
      <input
        type="password"
        placeholder="Password"
        minLength={10}
        required
        className={style.password}
        value={props.passwordValue}
        onChange={onChangePassword}
      />
      <span
        hidden={localStorage.getItem("passwordValid") === "1" ? true : false}
        className={`${style.prompt} ${style.prompt_password}`}
      >
        Пароль не может быть менее 10 символов, и должен имень хотя бы 1 цифру,
        1 строчную латинскую букву, 1 заглавную латинскую букву и 1 символ
      </span>
      <button type="button" className={style.btn} onClick={onLogin}>
        Войти
      </button>
    </form>
  );
};
