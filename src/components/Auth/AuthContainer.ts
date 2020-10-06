import { IAuthState } from "./../../Redux/reducers/AuthReducer";
import { connect } from "react-redux";
import { login, setEmail, setPassword } from "../../Redux/actions/action";
import Auth from "./Auth";
import { TEmail, TPassword } from "../../Redux/actions/type";

// Мапим стэйт для авторизации, правильно ли???
let mapStateToProps = (state: IAuthState) => {
  return {
    authPage: state,
  };
};

// Мапим колбэки для авторизации, правильно???
let mapDispatchToProps = (dispatch: any) => {
  return {
    setEmail: (value: string & TEmail) => dispatch(setEmail(value)),
    setPassword: (value: string & TPassword) => dispatch(setPassword(value)),
    isLogin: () => dispatch(login()),
  };
};

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
