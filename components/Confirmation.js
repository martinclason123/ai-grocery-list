import React, { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Confirmation = ({ formValues, onSubmit, onWait }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRegex.test(email)) {
      setEmailError("");
      onSubmit(email);
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const safeStringify = (value) => {
    const cache = new Set();
    return JSON.stringify(value, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (cache.has(value)) {
          return;
        }
        cache.add(value);
      }
      return value;
    });
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <h3>Please review your answers:</h3>
      <ol>
        {formValues.map((value, index) => (
          <li key={index}>
            <strong>Question {index + 1}:</strong> {safeStringify(value || {})}
          </li>
        ))}
      </ol>
      <p>
        The machines may need to think about this for a couple of minutes.
        Please choose to wait while they think about it, otherwise enter your
        email address and we will send it to you. We will never send you any
        promotions, sell your email, or use it in any way other than sending you
        your meal plan.
      </p>
      <button onClick={onWait}>I'll wait</button>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
        {emailError && <p>{emailError}</p>}
      </form>
    </div>
  );
};

export default Confirmation;
