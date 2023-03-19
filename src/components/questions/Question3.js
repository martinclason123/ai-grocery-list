import React, { useEffect, useRef, useState } from "react";
import {
  QuestionContainer,
  Question,
  AnswerInput,
  PredictiveTextDrawer,
  PredictiveMatch,
} from "@/styles/QuestionStyles";

const Question3 = ({ onFormDataChange }) => {
  const inputRef = useRef();
  const [matches, setMatches] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const StoreList = [
    /* Populate this data with the most popular US grocery stores */
    "Walmart",
    "Kroger",
    "Costco",
    "Target",
    "Aldi",
  ];

  const filterMatches = (event) => {
    const userInput = event.target.value.toLowerCase();
    setInputValue(event.target.value);
    const filteredMatches = StoreList.filter((store) =>
      store.toLowerCase().startsWith(userInput)
    );
    setMatches(filteredMatches);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    onFormDataChange(event.target.value);
  };

  const handleMatchClick = (match) => {
    setInputValue(match);
    onFormDataChange(match);
    setMatches([]);
  };

  return (
    <QuestionContainer>
      <Question>Question 3</Question>
      <AnswerInput
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(event) => {
          filterMatches(event);
          handleChange(event);
        }}
      />
      <PredictiveTextDrawer>
        {matches.map((match, index) => (
          <PredictiveMatch key={index} onClick={() => handleMatchClick(match)}>
            {match}
          </PredictiveMatch>
        ))}
      </PredictiveTextDrawer>
    </QuestionContainer>
  );
};

export default Question3;
