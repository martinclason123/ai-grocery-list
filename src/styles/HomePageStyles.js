import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 1em;
  font-family: roboto;
  max-width: 1200px;
  margin: 0 auto;
`;
export const HeaderOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
  padding-left: 1em;
  top: 0;
  left: 0;
  background-color: #fafafa;
  height: 100%;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
    position: relative;
    background-color: #fff;
  }
`;
export const Header = styled.h1`
  font-size: 4.2em;
  margin: 0 0 0.4em 0;
  text-align: left;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 8em;
    margin-top: 0.4em;
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    margin: 2em 0;
  }
  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;
export const CheckmarkSpan = styled.span`
  margin-right: 1em;
`;
export const Description = styled.p`
  font-size: 1.4em;
  text-align: left;
  max-width: 80%;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 4em;
    max-width: 100%;
  }
`;
export const CheckmarkImage = styled.img`
  width: 2em;
  margin: 0.75em 0.75em 0.75em 0;
  @media (max-width: 640px) {
    width: 4em;
    margin: 1em 0.75em 0 0;
  }
`;
export const CallToAction = styled.button`
  font-size: 1em;
  padding: 0.75em 1.5em;
  border: none;
  background-color: #1d6859;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin: 1em;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #313b42e0;
    color: white;
  }
  @media (max-width: 640px) {
    font-size: 3em;
    padding: 1em 1.75em;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
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
  color: black;
  margin-left: 4vw;
  font-size: 2em;
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
  margin-top: 2em;
  display: flex;
  justify-content: center;
  gap: 1em;

  @media (max-width: 551px) {
    gap: 0;
  }
`;

export const StartOverButton = styled.button`
  font-size: 1em;
  padding: 0.75em 1.5em;
  border: none;
  background-color: #f44336;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin: 1em;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f4504d;
    color: white;
  }
  @media (max-width: 640px) {
    font-size: 3em;
    padding: 1em 1.75em;
  }
`;

export const HeroImage = styled.img`
  max-width: 1536px;
  width: 100%;
  margin: 0 auto;
`;

export const HeroContainer = styled.div`
  position: relative;
  font-size: 1.333vw;

  @media (min-width: 1201px) {
    font-size: 16px;
  }
`;
