/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import './public/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router';
import Navigation from './Components/Navigation/Navigation';
import InputLink from './Components/InputLink/InputLink';
import ListUrlContainer from './Container/ListUrlContainer';

const App: React.FC = () => (
  <>
    <Switch>
      <Route path="/stats">
        <ListUrlContainer />
      </Route>
      <Route path="/">
        <Navigation />
        <InputLink />
        <ListUrlContainer />
      </Route>
    </Switch>
  </>
);
export default App;
