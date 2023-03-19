import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d5d1d1;
  border-radius: 1em;
  color: #4a4848;
  font-family: roboto;
  margin: 0 auto;
  font-size: 0.521vw;
`;

export const Question = styled.h1`
  font-size: 6em;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const AnswerInput = styled.input`
  font-size: 1rem;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
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
`;
export const PredictiveMatch = styled.li`
  text-decoration: none;
  list-style: none;
  background-color: lightgrey;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const CheckBoxLabel = styled.label`
  margin-left: 8px;
`;

export const AddButton = styled.button`
  margin-left: 8px;
`;
