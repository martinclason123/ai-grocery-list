import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 1rem;
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  margin: 1rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  margin: 1rem;
  text-align: center;
`;

export const CallToAction = styled.button`
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: #4285f4;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #3a75c4;
    color: white;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f8f9fa;
  padding: 10px;
  width: 100%;
`;

export const RobotLogo = styled.div`
  cursor: pointer;
`;
