import React, { useState, useEffect } from "react";
import Axios from "axios";
import { IntlProvider } from 'react-intl';
// import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './AppLayout';
import UserContext from "./utils/UserContext";
import contant from './utils/constant';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        contant.BACKEND_URL + "/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(contant.BACKEND_URL + "/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <IntlProvider locale="en">
        <Router>
          <UserContext.Provider value={{ userData, setUserData }}>
            <AppLayout />
          </UserContext.Provider>
        </Router>
    </IntlProvider>
  );
}

export default App;
