import "../App.css";
import { useState, useEffect } from "react";
// import { useRouteMatch, Link, useHistory } from "react-router-dom";
// import { Card, Button, Modal } from "react-bootstrap";

const FetchSingleCharacter = (props) => {
  const [character, setCharacter] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const history = useHistory();
  const characterDetailRouteMatch = useRouteMatch("/Characters/:id");
  const charId = characterDetailRouteMatch.params.id;

  useEffect(async () => {
    const response = await fetch(`http://localhost:3000/characters/${charId}`);
    const body = await response.json();
    setCharacter(body);
  }, []);

  const deleteCharacter = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/characters/characters/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      const filteredCharacters = characters.filter(
        (character) => character._id !== data._id
      );
      setCharacters(filteredCharacters);
      alert("Character Deleted");
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (!character) {
    return <div>loading</div>;
  }

  return (
    <>
      <div>
        <h1>
          {character.name}'s
          <br />
          Character Sheet
        </h1>
        <img src={character.image} alt="character" />
        <br />
        <label>Name: {character.name} </label>
        <br />
        <label>Race: {character.race}</label>
        <br />
        <label>Pronouns: {character.pronouns}</label>
        <br />
        <label>Class: {character.characterClass}</label>
        <br />
        <label>HP: {character.hp}</label>
        <br />
        <label>Main Weapon: {character.weapon}</label>
        <br />
        <label>Main Attack: {character.attack}</label>
        <br />
        <label>Armor Class: {character.armorClass}</label>
        <br />
        <label>
          Motto: <br />"{character.catchphrase}"
        </label>
        <br />
        <label>Strength: {character.strength}</label>
        <br />
        <label>Dexterity: {character.dexterity}</label>
        <br />
        <label>Constitution {character.constitution}</label>
        <br />
        <label>Intelligence: {character.intelligence}</label>
        <br />
        <label>Wisdom {character.wisdom}</label>
        <br />
        <label>Charisma: {character.charisma}</label>
        <br />
        <label>Backstory:</label>
        <br />
        <div id="backstory">"{character.backstory}"</div>
        <br />
        <Link to={`/UpdateCharacterForm/${character._id}`}>
          <Button> EDIT CHARACTER</Button>
        </Link>
        <br /> <br />
        <Button variant="danger" onClick={handleShow}>
          DELETE CHARACTER (CANNOT UNDO)
        </Button>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Delete Character</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this character? This action cannot
            be undone!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Nevermind
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteCharacter(character._id);
                handleClose();
              }}
            >
              DELETE
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default FetchSingleCharacter;
