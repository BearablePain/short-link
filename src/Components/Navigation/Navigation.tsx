/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import Modals from '../UI/Modals';

const Navigation = () => {
  const [modalContent, setModalContent] = useState('');
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const getContent = (word: string) => setModalContent(word);

  return (
    <>
      <Nav
        className="navbar  navbar-dark bg-dark menu"
        style={{ justifyContent: 'flex-end' }}
      >
        <NavItem active>
          <Link to="/">Logo</Link>
        </NavItem>
        <NavItem
          onClick={() => {
            toggle();
            getContent('auth');
          }}
        >
          <NavLink>Войти</NavLink>
        </NavItem>
        <NavItem
          onClick={() => {
            toggle();
            getContent('reg');
          }}
        >
          <NavLink>Зарегситрироваться</NavLink>
        </NavItem>
      </Nav>
      <Modals toggle={toggle} modal={modal} modalContent={modalContent} />
    </>
  );
};

export default Navigation;
