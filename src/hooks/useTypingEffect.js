import { useState, useEffect } from "react";

const useTypingEffect = (text, typingSpeed = 100) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    let index = -1;
    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return displayedText;
};

export default useTypingEffect;
