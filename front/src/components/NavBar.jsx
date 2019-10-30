import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Musika !</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/AlbumList">Tous les Albums</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/AddAlbum">Ajouter un album</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Modifier un album</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Supprimer un album</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}