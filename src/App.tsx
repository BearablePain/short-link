import React from 'react';
import './public/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/Navigation/Navigation';
import InputLink from './Components/InputLink/InputLink';
import ListUrlContainer from './Container/ListUrlContainer';

const App: React.FC = () => (
  <>
    <Navigation />
    <InputLink />
    <ListUrlContainer />
  </>
);
export default App;
