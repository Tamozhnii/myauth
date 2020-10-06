import { IBaseActionCreator } from "../actions/action";
import { EActionTypes, TEmail, TPassword } from "../actions/type";

// Создание интерфесоф по аналогии с проетом, чтобы передать для экшена строгий тип, вместо ANY
interface ISetEmailAction
  extends IBaseActionCreator<EActionTypes.SET_EMAIL, TEmail> {}
interface ISetPasswordAction
  extends IBaseActionCreator<EActionTypes.SET_PASSWORD, TPassword> {}
interface ISetLoginAction
  extends IBaseActionCreator<EActionTypes.LOGIN, boolean> {}

// Конечный тип для передаваемого экшена
export type TAuthAction =
  | ISetEmailAction
  | ISetPasswordAction
  | ISetLoginAction;

// Интерфейс чтобы определить начальное состояние объекта относящийся к странице авторизации
export interface IAuthState {
  // Изза того что указал payload необязательным атрибутом + указал кастомный тип,
  //пришлось добавить 3 типа, как правильнее сделать ????
  emailValue: string | TEmail;
  emailValide: boolean;
  // Аналогично с payload
  passwordValue: string | TPassword;
  passwordValide: boolean;
  isLogin: boolean;
}

// Реализация начального состояния компонента авторизации
const AuthState: IAuthState = {
  emailValue: "",
  emailValide: false,
  passwordValue: "",
  passwordValide: false,
  isLogin: false,
};

// Функция которая занимается проверкой валидности поля Email
// передаваемый аргумент что и в AuthState, как правильно??
const ValidateEmail = (value: string | TEmail): boolean => {
  let flag = value.toString().match(/^([\w.%+-]+)@([\w-]+\.)+([a-z]{2,10})$/i)
    ? true
    : false;
  localStorage.setItem("emailValid", flag ? "1" : "0");
  return flag;
};

// Функция которая занимается проверкой валидности поля Password
// Аналогично с payload
const ValidatePassword = (value: string | TPassword): boolean => {
  let flag =
    value.toString().length >= 10 &&
    value.toString().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)
      ? true
      : false;
  localStorage.setItem("passwordValid", flag ? "1" : "0");
  return flag;
};

// Функция для проверки валидности полей и сохранения в локал сторедж,
//потому что незаню как передать данные из стора там где определяются Роуты
const authValid = (value: boolean): boolean => {
  localStorage.setItem("authValid", value ? "1" : "0");
  return value;
};

export function authReducer(
  state = AuthState,
  action: TAuthAction
): IAuthState {
  switch (action.type) {
    case EActionTypes.SET_EMAIL:
      return {
        ...state,
        // Присвоить новое значение для поля емаил
        emailValue: action.payload,
        // Проверить на валидность
        emailValide: ValidateEmail(action.payload),
      };
    case EActionTypes.SET_PASSWORD:
      return {
        ...state,
        passwordValue: action.payload,
        passwordValide: ValidatePassword(action.payload),
      };
    case EActionTypes.LOGIN:
      return {
        ...state,
        // Если в стейте оба поля валидны, то типо зарегался, если нет то исправляй
        isLogin: authValid(
          state.emailValide && state.passwordValide ? true : false
        ),
      };
    default:
      return state;
  }
}
