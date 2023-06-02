import { Children, useState } from "react";
import { InputWrapper } from "./WaitingListStyles";
const ActiveInput = () => {
  const [active, setActive] = useState(false);
  const borderActive = { border: "0.01em solid lime" };

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };

  return (
    <InputWrapper
      style={active ? borderActive : null}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {Children}
    </InputWrapper>
  );
};

export default ActiveInput;
