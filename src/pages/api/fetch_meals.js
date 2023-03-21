import { Configuration, OpenAIApi } from "openai";
import { buildPrompt } from "@/components/prompts/promptBuilder";

const OPENAI_API_KEY = "";
console.log(`API key is ${OPENAI_API_KEY}`);

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const formData = req.body;

      // Log formData
      console.log("formData:", formData);

      // Compose the prompt based on the formData
      const prompt = buildPrompt(formData);

      // Log the prompt
      console.log("prompt:", prompt);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        // stop: ["\n"],
      });

      // Log the API response
      console.log("API response:", response.data);

      const meals = response.data.choices[0].text
        .split("\n")
        .filter((meal) => meal.trim() !== "");

      // Log the meals
      console.log("meals:", meals);

      res.status(200).json({ meals });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
