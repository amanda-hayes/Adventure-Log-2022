import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>New Adventure Log</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/Login" exact component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
