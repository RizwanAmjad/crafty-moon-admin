import React, { useState, useEffect } from "react";

import AppComponent from "./components/AppComponent";
import LoginComponent from "./components/LoginComponent";
import AuthContext from "./auth/context";

import "./Normalize.css";

function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? <AppComponent /> : <LoginComponent />}
    </AuthContext.Provider>
  );
}

export default App;
