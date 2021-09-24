import "../App.css";
import { useReducer, useState } from "react";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: "",
      password: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Register = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h1>Register</h1>
      {submitting && <div>Creating Account...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Email</p>
            <input
              name="Email"
              onChange={handleChange}
              value={formData.email || ""}
              placeholder={"email@example.com"}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              name="Password"
              onChange={handleChange}
              value={formData.password || ""}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
