import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
      <div className="container">
        <NavbarBrand href="/" style={{fontWeight: "700"}}>Dad Weather</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;