import styled from "styled-components";

export const FormContainer = styled.div`
  // Add your form container styles here
`;

export const FormNavigation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavButton = styled.button`
  font-size: 1em;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const ProgressStep = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: ${({ active }) => (active ? "#54a0ff" : "#f1f2f6")};
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: -5px;
    right: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "#54a0ff" : "#f1f2f6")};
  }
`;
