import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

const Navigation = () => {
  return (
    <Nav className="navbar  navbar-dark bg-dark menu">
      <NavItem active><Link to="/">Logo</Link></NavItem>
      <NavItem> <Link to="/">Войти</Link></NavItem>
      <Link to="/">Зарегестрироваться</Link>
    </Nav>
  );
};

export default Navigation;
