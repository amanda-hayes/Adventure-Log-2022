import "../App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateCharacterForm = (props) => {
  <Formik
    initialValues={{
      name: "",
      race: "",
      pronouns: "",
      characterClassSelect: "",
      strengthInput: "",
      dexInput: "",
      conInput: "",
      intInput: "",
      wisInput: "",
      charismaInput: "",
      hpSelect: "",
      weaponSelect: "",
      attackSelect: "",
      armorClassSelect: "",
      battleCryInput: "",
      imageSelect: "",
      backstoryTextarea: "",
    }}
    onSubmit={async (values) => {
      try {
        const response = await fetch(
          "http://localhost:5000/characters/create",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const data = await response.json();
        console.log(data);
        alert("Character created");
        props.history.push("/Dashboard");
      } catch (error) {
        console.log(error);
        alert("Error");
      }
    }}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            type="text"
            className={
              "form-control" +
              (errors.name && touched.name ? " is-invalid" : "")
            }
          />
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary mr-2"
              disabled={isSubmitting}
            >
              Create
            </button>
            {/* <button type="reset" className="btn btn-secondary">
              Reset
            </button> */}
          </div>
        </div>
      </Form>
    )}
  </Formik>;
};

export default CreateCharacterForm;
