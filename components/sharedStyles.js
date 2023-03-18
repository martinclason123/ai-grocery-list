import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const NextButton = styled.button`
  font-size: 1rem;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #f1f1f1;
  color: #4285f4;
  border: 1px solid #4285f4;
  border-radius: 4px;
  margin-top: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #4285f4;
    color: white;
  }
`;

export const SuggestionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const SuggestedOption = styled.div`
  cursor: pointer;
  margin-bottom: 5px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 4px 8px;
  border-radius: 4px;
  &:hover {
    text-decoration: underline;
  }
`;
