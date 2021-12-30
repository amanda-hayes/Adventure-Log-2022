// import "../../App.css";
import { Field } from "formik";

const RolledStats = () => (
  <>
    <h1>Stats</h1>
    <label htmlFor="attack-field">Attack</label>
    <Field type="text" name="attack" className="formRow"></Field>
    <label htmlFor="armor-class">Armor Class</label>
    <Field type="text" name="ac" className="formRow"></Field>
    <label htmlFor="weapon">Weapon</label>
    <Field type="text" name="weapon" className="formRow"></Field>
  </>
);

export default RolledStats;
