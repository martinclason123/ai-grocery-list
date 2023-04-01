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
`;

export const Question = styled.h1`
  font-size: 6em;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const AnswerInput = styled.input`
  font-size: 3em;
  padding: 12px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
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
  border: 2px solid lightgrey;
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
  margin-bottom: 8px;
  flex-direction: row-reverse;
  margin-right: 10em;
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
`;

export const AddButton = styled.button`
  margin-left: 8px;
  font-size: 2.4em;
  background: transparent;
  border-radius: 4px;
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
  height: 1.2em;
  width: 1.2em;
  z-index: 1;
`;

export const AllergyInput = styled.input`
  font-size: 2.4em;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.2em 0.5em;
`;

export const CustomCheckbox = styled.span`
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border: 2px solid;
  border-radius: 4px;
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
    background-color: blue;
    border-radius: 2px;
    opacity: 0;
  }
`;

export const CheckedCustomCheckbox = styled(CustomCheckbox)`
  &::after {
    opacity: 1;
  }
`;
