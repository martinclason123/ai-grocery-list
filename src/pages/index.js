import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Container,
  Header,
  Description,
  CallToAction,
  Navbar,
  RobotLogo,
} from "../styles/HomePageStyles";
import MultiStepForm from "../components/MultiStepForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialShowForm = localStorage.getItem("formOpen") === "true";
      setShowForm(initialShowForm);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      if (typeof window !== "undefined" && showForm) {
        localStorage.setItem("formOpen", "true");
      } else if (typeof window !== "undefined") {
        localStorage.removeItem("formOpen");
      }
    }
  }, [showForm, initialized]);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleLogoClick = () => {
    setShowForm(false);
  };

  return (
    <Container>
      <Navbar>
        <RobotLogo onClick={handleLogoClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="50"
            height="50"
          >
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="black"
              rx="10"
              ry="10"
            />
            <rect
              x="35"
              y="10"
              width="30"
              height="15"
              fill="black"
              rx="5"
              ry="5"
            />
            <circle cx="35" cy="40" r="5" fill="white" />
            <circle cx="65" cy="40" r="5" fill="white" />
            <rect
              x="40"
              y="55"
              width="20"
              height="10"
              fill="white"
              rx="2"
              ry="2"
            />
          </svg>
        </RobotLogo>
      </Navbar>
      <Head>
        <title>Custom Meal Planner</title>
        <meta
          name="description"
          content="Create your custom meal plan, shopping list, and cooking instructions based on your specific needs, budget, and store."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!showForm && (
        <>
          <Header>Welcome to Custom Meal Planner</Header>
          <Description>
            Get a custom meal plan, shopping list, and cooking instructions
            tailored to your specific needs, budget, and store.
          </Description>
          <CallToAction onClick={handleGetStarted}>
            Let's get started!
          </CallToAction>
        </>
      )}

      {showForm && <MultiStepForm />}
    </Container>
  );
}
