import { NextSeo } from "next-seo";
import WaitingList from "@/components/WaitingList/WaitingList";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home - Automatic Meal Planner | Personalized Meal Planning Solution"
        description="Automatic Meal Planner offers the best personalized meal planning solution. We create meal plans based on your dietary needs and preferences. Try our multi-step form and get your customized meal plan, recipes, and shopping list today!"
        openGraph={{
          type: "website",
          url: "https://www.automaticmealplan.com/",
          title:
            "Home - Automatic Meal Planner | Personalized Meal Planning Solution",
          description:
            "Automatic Meal Planner offers the best personalized meal planning solution. We create meal plans based on your dietary needs and preferences. Try our multi-step form and get your customized meal plan, recipes, and shopping list today!",
          images: [
            {
              url: "https://res.cloudinary.com/dflipazxf/image/upload/v1686515156/Automatic%20Meal%20Plan/og-preview-img_mbtckn.jpg",
              width: 800,
              height: 600,
              alt: "Mother and daughter child together",
            },
          ],
        }}
      />
      <WaitingList />;
    </>
  );
}
// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import {
//   Container,
//   Header,
//   Description,
//   CallToAction,
//   Navbar,
//   RobotLogo,
//   StartOverButton,
//   ButtonsContainer,
//   HeaderOverlay,
//   CheckmarkSpan,
//   CheckmarkImage,
//   DescriptionContainer,
//   HomeIcon,
//   NavLink,
//   HeroImage,
//   HeroContainer,
// } from "../styles/HomePageStyles";
// import MultiStepForm from "../components/MultiStepForm";
// import useTypingEffect from "@/hooks/useTypingEffect";

// export default function Home() {
//   const [showForm, setShowForm] = useState(false);
//   const [initialized, setInitialized] = useState(false);
//   const [hasStartedForm, setHasStartedForm] = useState(false);
//   const [blinking, setBlinking] = useState(false);
//   const [newForm, setNewForm] = useState(true);

//   const headerText = useTypingEffect("Put Your Dinner Plan on Auto Pilot", 50);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const initialShowForm = localStorage.getItem("formOpen") === "true";
//       const hasFormData = localStorage.getItem("formData") !== null;
//       setShowForm(initialShowForm);
//       setHasStartedForm(hasFormData);
//       setInitialized(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (initialized) {
//       if (typeof window !== "undefined" && showForm) {
//         localStorage.setItem("formOpen", "true");
//       } else if (typeof window !== "undefined") {
//         localStorage.removeItem("formOpen");
//       }
//     }
//   }, [showForm, initialized]);

//   const handleGetStarted = () => {
//     setShowForm(true);
//     setHasStartedForm(true);
//   };

//   const handleLogoClick = () => {
//     setShowForm(false);
//   };

//   const handleStartOver = () => {
//     localStorage.removeItem("formData");
//     localStorage.removeItem("currentStep");
//     localStorage.removeItem("meals");
//     localStorage.removeItem("selectedMeals");
//     localStorage.removeItem("recipeCards");
//     localStorage.removeItem("recipeData");
//     localStorage.removeItem("groceryList");

//     setShowForm(false); // Add this line to temporarily hide the form

//     // Update the URL with the first step
//     const newUrl = new URL(window.location);
//     newUrl.searchParams.set("step", 0);
//     window.history.replaceState({}, "", newUrl.toString());

//     setTimeout(() => {
//       setShowForm(true); // Show the form again after a brief delay
//     }, 100);
//   };

//   return (
//     <Container>
//       <Navbar>
//         <RobotLogo onClick={handleLogoClick}>
//           <NavLink>Home</NavLink>
//         </RobotLogo>
//         <RobotLogo onClick={handleLogoClick}>
//           <HomeIcon src="/images/bwlogo2.svg" />
//         </RobotLogo>
//       </Navbar>

//       <Head>
//         <title>Custom Meal Planner</title>
//         <meta
//           name="description"
//           content="Create your custom meal plan, shopping list, and cooking instructions based on your specific needs, budget, and store."
//         />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap"
//           rel="stylesheet"
//         ></link>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
//           rel="stylesheet"
//         ></link>
//         <link
//           href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
//           rel="stylesheet"
//         ></link>
//       </Head>

//       {!showForm && (
//         <HeroContainer>
//           <HeroImage src="/images/hero.png" />
//           <HeaderOverlay>
//             <Header>{headerText}</Header>
//             <div>
//               <DescriptionContainer>
//                 <CheckmarkImage src="/images/greenCheck.svg" />
//                 <Description>
//                   Customized meal plans tailored to your dietary preferences and
//                   lifestyle
//                 </Description>
//               </DescriptionContainer>
//               <DescriptionContainer>
//                 <CheckmarkImage src="/images/greenCheck.svg" />
//                 <Description>
//                   Easy-to-follow, mouth-watering recipes for every meal
//                 </Description>
//               </DescriptionContainer>
//               <DescriptionContainer>
//                 <CheckmarkImage src="/images/greenCheck.svg" />
//                 <Description>
//                   A streamlined shopping list, organized by departments to save
//                   you time at the store
//                 </Description>
//               </DescriptionContainer>
//             </div>
//             <ButtonsContainer>
//               <CallToAction onClick={handleGetStarted}>
//                 {hasStartedForm ? "Resume" : "Let's get started!"}
//               </CallToAction>
//               {hasStartedForm && (
//                 <StartOverButton onClick={handleStartOver}>
//                   Start Over
//                 </StartOverButton>
//               )}
//             </ButtonsContainer>
//           </HeaderOverlay>
//         </HeroContainer>
//       )}

//       {showForm && <MultiStepForm setBlinking={setBlinking} />}
//     </Container>
//   );
// }
