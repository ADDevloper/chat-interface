
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

export const getStylistResponse = async (prompt: string, history: Message[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Format history for the model
    // Note: In a real app, you'd want to handle this better, 
    // but for this demo, we can just prepend the context.
    const systemInstruction = `You are a professional fashion stylist and personal shopper. 
    You are helpful, trendy, encouraging, and have a great eye for detail. 
    You know the user's wardrobe (imagine it contains a mix of classics, vintage pieces, and some trendy items).
    Your goal is to provide specific outfit advice, analyze wardrobe gaps, and help the user feel confident. 
    Keep responses concise but fashionable. Use occasional style-related emojis.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: `Context: ${systemInstruction}\n\nUser asks: ${prompt}` }] }
      ],
      config: {
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of a wardrobe malfunction (technical error). Can you try asking me again in a moment? ✨";
  }
};
