import "../App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => (
  <>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={async (values) => {
        try {
          const response = await fetch("http://localhost:5000/users/login", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(values),
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              className={
                "form-control" +
                (errors.email && touched.email ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary mr-2"
              disabled={isSubmitting}
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </>
);

export default Login;
