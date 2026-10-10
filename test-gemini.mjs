import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("API key missing. Check your .env file.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function main() {
  const response = await ai.models.generateContent({
   model: "gemini-3.8-flash",
    contents: 'Reply with exactly: "Gemini is working!"',
  });

  console.log(response.text);
}

main().catch((error) => {
  console.error("Gemini test failed:", error.message);
  process.exitCode = 1;
});