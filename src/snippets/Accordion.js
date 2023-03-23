import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 15px;
`;

const AccordionHeader = styled.div`
  background: #f5f5f5;
  color: #333;
  cursor: pointer;
  padding: 15px;
  user-select: none; // Prevents text selection when quickly clicking
`;

const Accordion = ({ children, index, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={handleToggle}>
        Recipe {index + 1} {isOpen ? "▼" : "▶"}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
