import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-radius: 1em;
  color: #000;
  font-family: roboto;
  margin: 0 auto;
  font-size: 0.521vw;
  padding: 2em;

  @media (max-width: 640px) {
    font-size: 1.653vw;
  }
`;

export const Question = styled.h1`
  font-size: 6em;
  font-weight: bold;
  margin-bottom: 1em;
  @media (max-width: 640px) {
    margin-bottom: 0.25em;
  }
`;

export const AnswerInput = styled.input`
  font-size: 3.4em;
  padding: 0.5em 1.2em;
  border: 0.1em solid #ccc;
  border-radius: 0.4em;
  margin-bottom: 2em;
  font-weight: bold;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 0.2em #1d6859;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5em;
  margin-bottom: 0;
  font-size: 0.875em;
`;

export const PredictiveTextDrawer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: -2.1em;
`;
export const PredictiveMatch = styled.li`
  text-decoration: none;
  list-style: none;
  border: 0.2em solid lightgrey;
  font-size: 3em;
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #36454f;
    color: white;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8em;
  flex-direction: row-reverse;
  margin-right: 10em;

  @media (max-width: 640px) {
    margin-right: 6em;
    margin-bottom: 3em;
  }
`;

export const CheckBoxLabel = styled.label`
  margin-right: 0.5em;
  font-size: 4em;
  cursor: pointer;
`;

export const AddAllergyContainer = styled.label`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-right: 10em;
  margin-top: 2em;

  @media (max-width: 640px) {
    margin-right: 0;
    margin-bottom: 3em;
  }
`;

export const AddButton = styled.button`
  margin-left: 0.8em;
  font-size: 2.4em;
  background: transparent;
  border-radius: 0.4em;
  padding: 0.2em 0.5em;
  cursor: pointer;

  &:hover {
    background-color: #36454f;
    color: white;
  }
`;

export const QuestionCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 6em;
  width: 6em;
  overflow: visible;
  z-index: 1;
`;

export const AllergyInput = styled.input`
  font-size: 2.4em;
  border: 0.1em solid #ccc;
  border-radius: 0.4em;
  padding: 0.2em 0.5em;

  &:focus-visible {
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 0.2em #1d6859;
    }
  }
`;

export const CustomCheckbox = styled.span`
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border: 0.2em solid;
  border-radius: 0.4em;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.9em;
    height: 0.9em;
    background-color: #229091;
    border-radius: 0.2em;
    opacity: 0;
  }

  @media (max-width: 640px) {
    width: 2em;
    height: 2em;
  }
  &::after {
    width: 1.5em;
    height: 1.5em;
  }
`;

export const CheckedCustomCheckbox = styled(CustomCheckbox)`
  &::after {
    opacity: 1;
  }
`;

export const QuestionRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 1em;
  width: 1em;
  appearance: none;
  z-index: 1;
`;
