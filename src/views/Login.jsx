import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "../api/constants";
import { addUser, clearUser } from "../store/operations/user";
import { getLoggedIn } from "../store/selectors/user";
import { Header } from "../components/Header";

const Login = () => {
  const loggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  const onSuccessLogin = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    dispatch(
      addUser({
        name: res.profileObj.name,
        email: res.profileObj.email,
        isGoogleSigned: true,
      })
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    console.log(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const onSuccessLogout = () => {
    console.log("Logout made successfully");
    dispatch(clearUser());
  };

  return (
    <div>
      <Header size="h2" title="Форма входа в аккаунт" />
      {!loggedIn ? (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Войти через Google аккаунт"
          onSuccess={onSuccessLogin}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          style={{ marginTop: "100px" }}
          isSignedIn={loggedIn}
        />
      ) : (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Выйти из аккаунта"
          onLogoutSuccess={onSuccessLogout}
        />
      )}
    </div>
  );
};

export { Login };
