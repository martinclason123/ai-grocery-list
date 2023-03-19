import React, { useState } from "react";
import Head from "next/head";
import {
  Container,
  Header,
  Description,
  CallToAction,
} from "../styles/HomePageStyles";
import MultiStepForm from "../components/MultiStepForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  return (
    <Container>
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
