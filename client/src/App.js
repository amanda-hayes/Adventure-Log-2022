import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
        </Switch>
      </header>
    </div>
  );
};

export default App;
