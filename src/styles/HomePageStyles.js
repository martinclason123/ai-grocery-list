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

export const StartOverButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #f44336;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: #d32f2f;
  }
`;
