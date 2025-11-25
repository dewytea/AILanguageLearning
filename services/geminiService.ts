import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Ensure API Key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are an expert English language tutor named 'LinguaBot'. 
      Your goal is to help the user practice English conversation.
      1. Engage in natural conversation.
      2. If the user makes a grammar or vocabulary mistake, gently correct them at the end of your response using the format: [Correction: "better phrase"].
      3. Keep responses concise (under 50 words) to encourage rapid back-and-forth.
      4. Be encouraging and friendly.
      `,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Sorry, I didn't catch that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};
