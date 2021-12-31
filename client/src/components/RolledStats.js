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
    <label htmlFor="strength">Strength</label>
    <Field type="text" name="strength"></Field>
    <label htmlFor="dexterity">Dexterity</label>
    <Field type="text" name="dexterity"></Field>
    <label htmlFor="constitution">Constitution</label>
    <Field type="text" name="constitution"></Field>
    <label htmlFor="intelligence">Intelligence</label>
    <Field type="text" name="intelligence"></Field>
    <label htmlFor="wisdom">Wisdom</label>
    <Field type="text" name="wisdom"></Field>
    <label htmlFor="charisma">Charisma</label>
    <Field type="text" name="charisma"></Field>
    <label htmlFor="hp">Hit Points</label>
    <Field type="text" name="hp"></Field>
    <button type="submit" className="btn btn-primary mr-2">
      Roll Stats
    </button>
  </>
);

export default RolledStats;
