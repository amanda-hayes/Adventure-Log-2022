import "../App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterForm = () => (
  <>
    <h1>Register</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      })}
      onSubmit={async (values) => {
        try {
          const response = await fetch("http://localhost:5000/users/register", {
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
      {({ errors, status, touched, isSubmitting }) => (
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
            <div className="form-group col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  "form-control" +
                  (errors.confirmPassword && touched.confirmPassword
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="confirmPassword"
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
              Register
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </>
);

export default RegisterForm;
