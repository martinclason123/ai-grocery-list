import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Container,
  Header,
  Description,
  CallToAction,
  Navbar,
  RobotLogo,
  StartOverButton,
  ButtonsContainer,
  HeaderOverlay,
  CheckmarkSpan,
  CheckmarkImage,
  DescriptionContainer,
  HomeIcon,
  NavLink,
  HeroImage,
  HeroContainer,
} from "../styles/HomePageStyles";
import MultiStepForm from "../components/MultiStepForm";
import useTypingEffect from "@/hooks/useTypingEffect";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [newForm, setNewForm] = useState(true);

  const headerText = useTypingEffect("Put Your Dinner Plan on Auto Pilot", 50);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialShowForm = localStorage.getItem("formOpen") === "true";
      const hasFormData = localStorage.getItem("formData") !== null;
      setShowForm(initialShowForm);
      setHasStartedForm(hasFormData);
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
    setHasStartedForm(true);
  };

  const handleLogoClick = () => {
    setShowForm(false);
  };

  const handleStartOver = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("currentStep");
    localStorage.removeItem("meals");
    localStorage.removeItem("recipeCards");
    localStorage.removeItem("recipeData");
    localStorage.removeItem("groceryList");

    setShowForm(false); // Add this line to temporarily hide the form

    // Update the URL with the first step
    const newUrl = new URL(window.location);
    newUrl.searchParams.set("step", 0);
    window.history.replaceState({}, "", newUrl.toString());

    setTimeout(() => {
      setShowForm(true); // Show the form again after a brief delay
    }, 100);
  };

  return (
    <Container>
      <Navbar>
        <RobotLogo onClick={handleLogoClick}>
          <NavLink>Home</NavLink>
        </RobotLogo>
        <RobotLogo onClick={handleLogoClick}>
          <HomeIcon src="/images/bwlogo2.svg" />
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
        <HeroContainer>
          <HeroImage src="/images/hero.png" />
          <HeaderOverlay>
            <Header>{headerText}</Header>
            <div>
              <DescriptionContainer>
                <CheckmarkImage src="/images/greenCheck.svg" />
                <Description>
                  Customized meal plans tailored to your dietary preferences and
                  lifestyle
                </Description>
              </DescriptionContainer>
              <DescriptionContainer>
                <CheckmarkImage src="/images/greenCheck.svg" />
                <Description>
                  Easy-to-follow, mouth-watering recipes for every meal
                </Description>
              </DescriptionContainer>
              <DescriptionContainer>
                <CheckmarkImage src="/images/greenCheck.svg" />
                <Description>
                  A streamlined shopping list, organized by departments to save
                  you time at the store
                </Description>
              </DescriptionContainer>
            </div>
            <ButtonsContainer>
              <CallToAction onClick={handleGetStarted}>
                {hasStartedForm ? "Resume" : "Let's get started!"}
              </CallToAction>
              {hasStartedForm && (
                <StartOverButton onClick={handleStartOver}>
                  Start Over
                </StartOverButton>
              )}
            </ButtonsContainer>
          </HeaderOverlay>
        </HeroContainer>
      )}

      {showForm && <MultiStepForm setBlinking={setBlinking} />}
    </Container>
  );
}
