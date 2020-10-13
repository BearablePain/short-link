import React from 'react';
import './public/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/Navigation/Navigation';
import InputLink from './Components/Navigation/InputLinc/InputLink';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <InputLink />
    </>
  );
};

export default App;
