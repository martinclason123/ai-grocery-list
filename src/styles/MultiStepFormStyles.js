import styled from "styled-components";

export const FormContainer = styled.div`
  width: 90%;
`;

export const FormNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-top: 1em;
  font-size: 0.521vw;

  @media (max-width: 640px) {
    font-size: 1.653vw;
  }
`;

export const NavButton = styled.button`
  font-size: 3em;
  font-family: system-ui, sans-serif;
  box-shadow: 0 0 0 0.1em inset var(--c);
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  color: black;
  border: 3px solid black;
  font-weight: bold;
  cursor: pointer;
  padding: 0.25em 1em;

  &:hover {
    background-color: #3a75c4;
    color: white;
  }
`;
export const PrevButton = styled.button`
  font-size: 3.5em;
  font-family: system-ui, sans-serif;
  box-shadow: 0 0 0 0.1em inset var(--c);
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  color: black;
  border: 0.3em solid #e95a49;
  font-weight: bold;
  cursor: pointer;
  padding: 0.25em 1em;
  transition: all 0.5s;

  &:hover {
    background-color: #e95a49;
    color: white;
  }
`;

export const NextButton = styled.button`
  font-size: 3.5em;
  font-family: system-ui, sans-serif;
  box-shadow: 0 0 0 0.1em inset var(--c);
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  color: black;
  border: 0.3em solid #229091;
  font-weight: bold;
  cursor: pointer;
  padding: 0.25em 1em;
  transition: all 0.5s;
  &:hover {
    background-color: #229091;
    color: white;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2em auto;
`;

export const ProgressStep = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: ${({ active }) => (active ? "#229091" : "#f1f2f6")};
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: -4px;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "#229091" : "#f1f2f6")};
  }
`;
