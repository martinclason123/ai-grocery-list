import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`;

export const QuestionAnswer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
`;

export const Question = styled.h3`
  font-size: 1.1rem;
  margin: 0;
`;

export const Answer = styled.p`
  font-size: 1.1rem;
  margin: 0;
`;

export const BackButton = styled.button`
  background-color: #0099ff;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #007acc;
  }
`;
