const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

exports.summarizeText = async (text) => {

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content:
          "Summarize the text in 3-6 concise bullet points. Maximum 120 words."
      },
      {
        role: "user",
        content: text
      }
    ]
  });

  return response.choices[0].message.content;
};