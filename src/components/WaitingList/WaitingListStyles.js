// src/components/WaitingList/WaitingListStyles.js
import styled from "styled-components";

const tan = "#faf3ef";
const green = "#365d5a";
const orange = "#f18a5e";
const white = "#fff";

export const WaitingListContainer = styled.div`
  font-size: 1.563vw;
  max-width: 1100px;
  margin: 0 auto;
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
  font-size: 12em;
  line-height: 1.1em;
  padding: 0.2em 0 0 0;
`;
export const WaitingListDescription = styled.p`
  font-family: "Work Sans", sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;
export const InputWrapper = styled.div`
  border: 0.01em solid #ccc;
  border-radius: 0.6em;
  width: 44em;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  background-color: ${white};
  align-items: center;
  margin-bottom: 2em;
`;
export const Input = styled.input`
  padding: 0.5em 0 0.5em 0.5em;
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
  padding: 0.7em 0.5em;
  margin-bottom: 1em;
  font-size: 2.6em;
  border: transparent;
  border-radius: 0.6em;
  width: 100%;
  max-width: 17.1em;
  background-color: ${orange};
  color: ${white};
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  &:disabled {
    background-color: #ccc;
  }
`;

export const Icon = styled.svg`
  width: 2em;
  padding-left: 1.5em;
`;
