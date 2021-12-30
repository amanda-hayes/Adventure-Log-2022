import "../../App.css";
import { Formik, Field, Form } from "formik";
import RolledStats from "../RolledStats";
// import * as Yup from "yup";

const CreateCharacterForm = (props) => (
  <>
    <Formik
      initialValues={{
        name: "",
        race: "",
        pronouns: "",
        characterClassSelect: "",
        battleCryInput: "",
        imageSelect: "",
        backstoryTextarea: "",
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
                "form-row" + (errors.name && touched.name ? " is-invalid" : "")
              }
            />
            <br />
            <label htmlFor="race">Race</label>
            <Field as="select" name="race" className="formRow">
              <option value="human">Human</option>
              <option value="half-elf">Half-Elf</option>
              <option value="gnome">Gnome</option>
              <option value="halfling">Halfling</option>
              <option value="Half-Orc">Half-Orc</option>
              <option value="Aasimar">Aasimar</option>
            </Field>
            <label htmlFor="pronouns">Pronouns</label>
            <Field as="select" name="pronouns" className="formRow">
              <option value="she/her">she/her</option>
              <option value="he/him">he/him</option>
              <option value="they/them">they/them</option>
              <option value="other">Other</option>
              <option value="none">None</option>
            </Field>
            <label htmlFor="class-select">Class</label>
            <Field as="select" name="class" className="formRow">
              <option value="fighter">Fighter</option>
              <option value="wizard">Wizard</option>
              <option value="rogue">Rogue</option>
              <option value="cleric">Cleric</option>
              <option value="monk">Monk</option>
              <option value="druid">Druid</option>
              <option value="paladin">Paladin</option>
            </Field>
            <label htmlFor="image">Character Image</label>
            <Field name="image" as="select" className="formRow" />
            <label htmlFor="battle-cry">Battle Cry</label>
            <Field name="battle-cry" type="text" className="formRow" />
            <label htmlFor="backstory">Backstory (optional)</label>
            <Field name="backstory" as="textarea" className="formRow" />
            <RolledStats />
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
    </Formik>
  </>
);

export default CreateCharacterForm;
