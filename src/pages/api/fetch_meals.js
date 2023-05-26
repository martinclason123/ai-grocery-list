import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(`API key is ${OPENAI_API_KEY}`);

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { prompt } = req.body;

      const conversation = [
        {
          role: "system",
          content: `You are a helpful assistant that finds meal plans specifically catered to users restrictions, diets, allergies, shopping store preference and other factors. you should respond with nothing other than JSON. 
                    for this request, only return meal titles. Do not include ingredients or cooking instructions.
      
              Example format:
              {
                "meals": [
                  "Grilled Cheese and tomato soup,
                  "Steak and potatos",
                  "Spaghetti and meatballs",
                  ]
               }
              `,
        },

        { role: "user", content: `Text: ${prompt}` },
      ];

      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversation,
        // max_tokens: 20000,
        // temperature: 0.7,
      });

      // Log the API response
      console.log("API response:", response.data.choices);

      // Extract the JSON-like string from the API response
      const jsonResponseText = response.data.choices[0].message.content.trim();

      // Parse the JSON-like string into a JSON object
      const jsonResponse = JSON.parse(jsonResponseText);

      // Log the JSON response
      console.log("jsonResponse:", jsonResponse);

      res.status(200).json(jsonResponse);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
