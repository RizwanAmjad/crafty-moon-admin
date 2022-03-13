import { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "../auth/context";

const authTokenKey = "authToken";

function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    (() => {
      const authKey = localStorage.getItem(authTokenKey);
      if (authKey) login(authKey);
    })();
  }, []);

  const login = (jwt) => {
    localStorage.setItem(authTokenKey, jwt);
    const user = jwtDecode(jwt);
    if (user.isAdmin) setUser(user);
  };

  const logout = () => {
    localStorage.removeItem(authTokenKey);
    setUser(null);
  };

  return {
    login,
    logout,
    user,
  };
}

export default useAuth;
