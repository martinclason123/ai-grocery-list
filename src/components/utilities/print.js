// src/utils/print.js
import React, { useRef } from "react";

import { useReactToPrint } from "react-to-print";
import { PrintPage } from "@/styles/PrintStyles";
import { ReplaceButton } from "@/styles/ConfirmationPageStyles";
import PrintAll from "../PrintAll";

const Print = () => {
  const containerRef = useRef();
  const handlePrintRequest = useReactToPrint({
    content: () => containerRef.current,
  });

  return (
    <>
      <ReplaceButton onClick={handlePrintRequest}>
        Print Meal Plan
      </ReplaceButton>
      <div style={{ display: "none" }}>
        <PrintPage ref={containerRef}>
          <PrintAll />
        </PrintPage>
      </div>
    </>
  );
};

export default Print;
