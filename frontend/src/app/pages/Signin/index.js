import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from '../../utils/UserContext';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import contant from '../../utils/constant';

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        contant.BACKEND_URL + "/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
      <div className="signin-page">
        <div className="page-title">Log In</div>
        <div className="form-group">
          <Input name="email" type="email" placeholder="Email" onChange={setEmail} />
          <Input name="password" type="password" placeholder="Password" onChange={setPassword} />
          <Button field="Sign In" onClick={submit} />
        </div>
      </div>
  );
}

export default Signin;