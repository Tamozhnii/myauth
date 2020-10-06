import { connect } from "react-redux";
import { logOut } from "../../Redux/actions/action";
import Home from "./Home";

// Мапим стэйт для авторизации, правильно ли???
let mapStateToProps = () => {};

// Мапим колбэки для авторизации, правильно???
let mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
