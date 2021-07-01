import './App.css';
import List from './List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Form from './Form';
import Detail from './Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/new">
          <Form />
        </Route>
        <Route path="/edit/:id">
          <Form />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/" exact>
          <Redirect to="/list" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
