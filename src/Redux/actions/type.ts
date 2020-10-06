// Перечисление констант для экшена
export enum EActionTypes {
  SET_EMAIL = "setEmail",
  SET_PASSWORD = "setPassword",
  LOGIN = "login",
}

// Кастомный тип для эшена поля ввода емаил. По аналогии с проектом, зачем нужно???
export type TEmail = {
  value: string;
};

// Кастомный тип для эшена поля ввода пароля. По аналогии с проектом, зачем нужно???
export type TPassword = {
  value: string;
};
