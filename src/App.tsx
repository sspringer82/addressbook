import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import React, { Suspense } from 'react';
import { GridLoader } from 'react-spinners';

// import Form from './Form';
// import List from './List';
// import Detail from './Detail';

const Form = React.lazy(() => import('./Form'));
const List = React.lazy(() => import('./List'));
const Detail = React.lazy(() => import('./Detail'));

function App() {
  return (
    <Router>
      <Suspense fallback={<GridLoader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
