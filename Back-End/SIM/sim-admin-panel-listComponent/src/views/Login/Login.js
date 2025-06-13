import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import sim_logo from "../../assets/images/sim_logo.png";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { signIn } from "services/loginService";

const Login = (props) => {
  let navigate = useNavigate();
  const initialValues = {
    userName: "",
    password: "",
  };
  const validationSchema = 
    Yup.object().shape({
      userName: Yup.string()
        .email("Email no válido")
        .required("Campo obligatorio!"),
      password: Yup.string()
        .min(8, "Mínimo de 8 caracteres")
        .max(16, "Máximo 16 caracteres")
        .required("Campo obligatorio!"),
  });

  return (
    <div className="Login">
      <div className="loginFormContainer">
        <img className="imageLogo" alt="" src={sim_logo} />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            console.log(values);
            let response = await signIn(values);
            props.setLoggedIn(response.value)
            if(props.isLoggedIn) navigate("../home", { replace: true });
          }}
        >
          {({ errors, touched }) => (
            <Form className="formContent">
              <div>
                <Field name="userName" placeholder="Email administrador" />
                {errors.userName && touched.userName && (
                  <div className="fieldError">
                    {errors.userName.toString()}
                  </div>
                )}
              </div>
              <div>
                <Field name="password" type="password" placeholder="Contraseña" />
                {errors.password && touched.password && (
                  <div className="fieldError">
                    {errors.password.toString()}
                  </div>
                )}
              </div>

              <div className="formButtons">
                <button type="submit" className={!!(errors.userName || errors.password) ? "submitButton-disabled" : "submitButton"}>
                  Iniciar Sesión
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
