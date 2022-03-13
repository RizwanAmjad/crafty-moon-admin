import React from "react";

import * as Yup from "yup";

import FormComponent from "./forms/FormComponent";
import FormInputComponent from "./forms/FormInputComponent";
import FormSubmitComponent from "./forms/FormSubmitComponent";

import useAuth from "../hooks/useAuth";

import useApi from "../hooks/useApi";
import adminApi from "../api/admin";

import "./styles/login.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8).required().label("Password"),
});

function LoginComponent(props) {
  const { login } = useAuth();
  const { request: loginAdminRequest } = useApi(adminApi.loginAdmin);

  const handleLogin = async (admin, { setSubmitting }) => {
    setSubmitting(true);
    const { error, data } = await loginAdminRequest(admin);
    if (!error) login(data);
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <FormComponent
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        initialErrors={{}}
        onSubmit={handleLogin}
      >
        <FormInputComponent type="text" name="email" placeholder="Email" />
        <FormInputComponent
          type="password"
          name="password"
          placeholder="Password"
        />
        <FormSubmitComponent value="Login" />
      </FormComponent>
    </div>
  );
}

export default LoginComponent;
