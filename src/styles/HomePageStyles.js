import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 1rem;
  font-family: roboto;
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
`;
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const CheckmarkSpan = styled.span`
  margin-right: 1rem;
`;
export const Description = styled.p`
  font-size: 2rem;
  text-align: left;
  margin: 0;
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
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #313b42;
  padding: 10px;
  width: 80%;
  border-radius: 100px;
  margin-top: 1em;
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
`;
