const { GoogleGenAI } = require('@google/genai');

const getClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'your_google_gemini_api_key_here') {
    throw new Error(
      'Gemini API key is not configured. Please add GEMINI_API_KEY to your .env file.'
    );
  }

  return new GoogleGenAI({
    apiKey: apiKey,
  });
};

// Generate AI answer
const generateAnswer = async (question) => {
  try {
    const ai = getClient();

    const prompt =
      'You are a helpful assistant. ' +
      'Provide a clear, concise and direct answer to this question. ' +
      'Do not include introductory text. ' +
      'Just return the answer itself.\n\n' +
      'Question: ' +
      question;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
    });

    if (!response || !response.text) {
      throw new Error('No response text received from Gemini API');
    }

    return response.text.trim();
  } catch (error) {
    console.error(
      'Error in geminiService.generateAnswer:',
      error
    );

    throw new Error(
      'AI Answer Generation failed: ' + error.message
    );
  }
};

// Generate FAQ
const generateFAQ = async (topic) => {
  try {
    const ai = getClient();

    const prompt =
      'Generate one FAQ about the topic "' +
      topic +
      '". ' +
      'Return ONLY valid JSON in this exact format: ' +
      '{"question":"your question","answer":"your answer"}';

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
    });

    if (!response || !response.text) {
      throw new Error('No response received from Gemini API');
    }

    let text = response.text.trim();

    // Remove markdown code fences if Gemini adds them
    text = text.replace(/^```json\s*/i, '');
    text = text.replace(/^```\s*/i, '');
    text = text.replace(/\s*```$/i, '');

    const faqPair = JSON.parse(text);

    if (!faqPair.question || !faqPair.answer) {
      throw new Error('Invalid FAQ response received from Gemini');
    }

    return faqPair;
  } catch (error) {
    console.error(
      'Error in geminiService.generateFAQ:',
      error
    );

    throw new Error(
      'AI FAQ Generation failed: ' + error.message
    );
  }
};

module.exports = {
  generateAnswer,
  generateFAQ,
};