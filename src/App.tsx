import "./App.css";
import Menu from "../src/pages/menu/Menu";
import Survey from "../src/pages/survey/Survey";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/:restaurant/:item">
            <Survey />
          </Route>
          <Route path="/:restaurant">
            <Menu />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
