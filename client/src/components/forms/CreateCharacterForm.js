import "../App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateCharacterForm = () => {
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
        const response = await fetch("http://localhost:5000/characters/create", {
          method:
        }
        )
      }
    }}
  ></Formik>;
  return <h1>Create new Character</h1>;
};

export default CreateCharacterForm;
