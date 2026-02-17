import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ebebeb;
`;

const Logo = styled.div`
  img {
    height: 40px;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 10px;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

const Main = styled.main`
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const Footer = styled.footer`
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Header>
        <Logo>
          <img src="path_to_logo_image" alt="Logo" />
        </Logo>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink href="#">Link 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link 3</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </Header>
      <Main>
        <Section>
          <h1>Section Title</h1>
          {/* Section content */}
        </Section>
        {/* Add more sections */}
      </Main>
      <Footer>{/* Footer content */}</Footer>
    </Container>
  );
}

export default App;
