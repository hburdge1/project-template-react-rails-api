import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser, seeIceBreakers, setIceBreakers }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  function handleClick(){
    setIceBreakers(Array.from(seeIceBreakers).filter((icebreaker) =>
      icebreaker.favorite == true
    ))
  }
 useEffect(() => {
    fetch("/icebreakers")
      .then((res) => res.json())
      .then((data) => setIceBreakers(data));
  }, []);
  return (
    <Wrapper>
      <Logo>
        <Link to="/">N-Tro</Link>
      </Logo>
      <Nav>
        <Button user={user} as={Link} to="/new">
          New Icebreaker
        </Button>
        {/* <Link to="/new">New Icebreaker</Link> */}
        <Button onClick={handleClick} >
          Show my icebreakers
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
