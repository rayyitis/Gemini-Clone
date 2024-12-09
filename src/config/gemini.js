const apikey = 'AIzaSyCTrIkeZzLR3IpLgVS7oL3g3PB580jtWkA'

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const genAI = new GoogleGenerativeAI("AIzaSyCTrIkeZzLR3IpLgVS7oL3g3PB580jtWkA");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  

  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text(); 
  }
  
  export default run;