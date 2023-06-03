// src/components/WaitingList/WaitingListStyles.js
import styled from "styled-components";

const tan = "#faf3ef";
const green = "#365d5a";
const orange = "#f18a5e";
const white = "#fff";
const blue = "#aed4de";

export const WaitingListContainer = styled.div`
  font-size: 1.563vw;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background-color: ${tan};

  @media (min-width: 640px) {
    font-size: 0.521vw;
  }

  @media (min-width: 1100px) {
    font-size: 9px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 640px) {
    position: absolute;
    right: 0;
  }
`;

export const Logo = styled.svg`
  width: 8.5em;
  padding: 2em 2em 0 0;
`;
export const WaitingListTitle = styled.h1`
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  text-align: center;
  margin: 0;
  font-size: 14em;
  line-height: 1.1em;
  padding: 0.2em 0 0 0;
  @media (min-width: 640px) {
    font-size: 12em;
    padding-top: 0.4em;
  }
`;
export const WaitingListDescription = styled.p`
  font-family: "Work Sans", sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  @media (min-width: 640px) {
    margin: 2em 0 2em 0;
  }
`;
export const InputWrapper = styled.div`
  border: 0.01em solid #ccc;
  border-radius: 2em;
  width: 50em;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  background-color: ${white};
  align-items: center;
  margin-bottom: 2em;
`;
export const Input = styled.input`
  padding: 0.75em 0 0.75em 0.5em;
  margin-bottom: 0;
  font-size: 2.6em;
  border: transparent;
  width: 100%;
  position: relative;
  font-family: "Work Sans", sans-serif;
  &::placeholder {
    color: ${green};
  }
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.9em 0.5em;
  margin-bottom: 1em;
  font-size: 3em;
  font-weight: 500;
  border: transparent;
  border-radius: 0.6em;
  width: 100%;
  max-width: 17em;
  background-color: ${orange};
  color: ${white};
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;

export const Icon = styled.svg`
  width: 2em;
  padding-left: 2.75em;
`;

export const CopyContainer = styled.div`
  background-color: ${blue};
  padding-bottom: 15em;
`;

export const Copy = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 3em;
  font-weight: 500;
  text-align: center;
  padding: 2em 0 1em 0;
  @media (min-width: 640px) {
    width: 21em;
    font-size: 2.8em;
    margin: 0 auto;
    padding: 1em 0 1em 0;
  }
`;

export const CheckList = styled.ul`
  background-color: ${white};
  padding: 2em 0;
  width: 92%;
  margin: 0 auto;
  border-radius: 0.6em;
  @media (min-width: 640px) {
    width: 58em;
  }
`;

export const CheckListItem = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChecklistText = styled.span`
  font-size: 3em;
  font-family: "DM Serif Display", serif;
  padding-left: 1em;
`;

export const CheckListIcon = styled.svg`
  width: 3em;
  padding-right: 3em;
`;

export const Arrow = styled.svg`
  width: 1em;
  padding-left: 0.5em;
`;
