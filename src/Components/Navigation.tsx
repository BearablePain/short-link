import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

const Navigation = () => {
  return (
    <Nav className="navbar  navbar-dark bg-dark menu">
      <NavItem>
        <Link to="/">Logo</Link>{' '}
      </NavItem>
      <NavItem>
        <Link to="/">Войти</Link>
      </NavItem>
      <NavItem>
        <Link to="/">Зарегестрироваться</Link>
      </NavItem>
    </Nav>
  );
};

export default Navigation;
