import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 1rem;
  font-family: roboto;
  max-width: 1200px;
  margin: 0 auto;
`;
export const HeaderOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Header = styled.h1`
  font-size: 4.5rem;
  margin: 10rem 0 3rem 0;
  text-align: left;

  @media (max-width: 1085px) {
    margin-top: 1em;
  }
  @media (max-width: 551px) {
    font-size: 3rem;
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1085px) {
    align-items: flex-start;
    margin-bottom: 1em;
  }
`;
export const CheckmarkSpan = styled.span`
  margin-right: 1rem;
`;
export const Description = styled.p`
  font-size: 2rem;
  text-align: left;
  margin: 0;
  @media (max-width: 551px) {
    font-size: 1.6rem;
  }
`;
export const CheckmarkImage = styled.img`
  width: 2rem;
  margin: 0.75rem 0.75rem 0.75rem 0;
`;
export const CallToAction = styled.button`
  font-size: 2rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: #1d6859;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #313b42e0;
    color: white;
  }
  @media (max-width: 551px) {
    font-size: 1.5rem;
    padding: 0rem 1rem;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #313b42;
  padding: 10px;
  margin-top: 1em;
  width: 100%;
  @media (max-width: 1085px) {
    width: 100%;
    border-radius: 0;
  }
`;
export const HomeIcon = styled.img`
  width: 4em;
`;
export const NavLink = styled.h2`
  color: #fff;
`;
export const RobotLogo = styled.div`
  cursor: pointer;
  display: flex;
  gap: 2em;
  .robot-eye.blinking {
    animation: blink 0.2s ease-in-out 3;
  }

  @keyframes blink {
    0%,
    100% {
      fill: white;
    }
    50% {
      fill: blue;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1em;

  @media (max-width: 551px) {
    gap: 0;
  }
`;

export const StartOverButton = styled.button`
  font-size: 2rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: #f44336;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f4504d;
    color: white;
  }
  @media (max-width: 551px) {
    font-size: 1.6rem;
    padding: 0.7rem 1.15rem;
  }
`;
