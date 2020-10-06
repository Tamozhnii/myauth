import { EActionTypes, TEmail, TPassword } from "./type";

// Определен базовый интерфейс создания экшена, по аналогии с проектом.
export interface IBaseActionCreator<T, P> {
  type: T;
  payload: P;
}

// По аналогии с проектом создатель Экшена с уже четко определенными типами, описанных в типах...
export interface IActionCreator<P> extends IBaseActionCreator<EActionTypes, P> {
  type: EActionTypes;
  payload: P;
}

// Непосредственно создатель экшена
function actionCreator<T>(
  actionType: EActionTypes,
  data: T
): IActionCreator<T> {
  return {
    type: actionType,
    payload: data,
  };
}

// Экшен для поля ввода емаил
export function setEmail(value: TEmail): IActionCreator<TEmail> {
  return actionCreator<TEmail>(EActionTypes.SET_EMAIL, value);
}

// Экшен для поля ввода пароля
export function setPassword(value: TPassword): IActionCreator<TPassword> {
  return actionCreator<TPassword>(EActionTypes.SET_PASSWORD, value);
}

// Экшен для кнопки Войти, который не требует аргументов
export function login(): IActionCreator<boolean> {
  return actionCreator(EActionTypes.LOGIN, true);
}
