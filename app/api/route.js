import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let cached = null;

export async function POST(request) {
  try {
    const req = await request.json();
    console.log('req', req);

    if (!cached) {
      const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-16k',
        messages: [
          {
            role: 'user',
            content: req.text,
          },
        ],
      });
      console.log(chatCompletion.data.choices[0].message);
      cached = chatCompletion.data.choices[0].message;
      return NextResponse.json({ answer: chatCompletion.data.choices[0].message });
    } else {
      return NextResponse.json({ answer: cached });
    }
  } catch (e) {
    console.log('e', e);
  }
}
