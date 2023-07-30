import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import ClientHandler from "./components/ClientHandler";
import ClientEdit from "./components/ClientEdit";

function App() {

  return (
    <div className="App">
    <Switch>
                <Route path="/clients/:id" component={ClientEdit} />
                <Route path="/clients/new" component={ClientEdit} />
                <Route path="/clients" component={ClientHandler} />
    </Switch>
    </div>
  );
}

export default App;
