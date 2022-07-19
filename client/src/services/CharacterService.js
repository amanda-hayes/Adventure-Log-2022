const CharacterService = () => {
  <h1>This is the go-between for all the character stuff</h1>;
  // why do I need this it's because I have multiple components
  // that need to access properties from a single object
  // this service will manage the object and its properties
  // and I can use it to pass around data
  // which I hope will allow me to avoid prop drilling
};

export default CharacterService;
