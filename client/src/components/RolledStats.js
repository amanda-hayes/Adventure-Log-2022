// import "../../App.css";
import { Formik, Field, Form } from "formik";

const RolledStats = () => (
  <>
    <h1>Stats</h1>
    <Formik>
      <Form>
        <label htmlFor="attack-field">Attack</label>
        <Field type="text" name="attack" className="formRow"></Field>
        <label htmlFor="armor-class">Armor Class</label>
        <Field type="text" name="ac" className="formRow"></Field>
        <label htmlFor="weapon">Weapon</label>
        <Field type="text" name="weapon" className="formRow"></Field>
      </Form>
    </Formik>
  </>
);

export default RolledStats;
