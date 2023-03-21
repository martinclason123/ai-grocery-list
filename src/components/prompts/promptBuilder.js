export const buildPrompt = (formData) => {
  const prompt = `Provide me a meal plan with titles only for ${
    formData.days
  } days, that will feed ${formData.adults} adults and ${
    formData.children
  } kids. The meals should be available for purchase at ${
    formData.store
  } grocery store, and should prioritize ${formData.priorities.join(
    ", "
  )}. Make sure none of the ingredients contain ${formData.restrictions.join(
    ", "
  )}. Organize the plan by day, but only include titles at this time. The format should be as follows:
  
    Day 1
    Dinner: [generated response]
    
    Day 2
    Dinner: [generated response]
    
    ...and so on.`;

  return prompt;
};
