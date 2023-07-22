import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-3.5-turbo';
//error401が出る時はapi keyを新しくすべき
export const chat = async (message) => {
  try {
    const response = await axios.post(
      `${API_URL}chat/completions`,
      {
        // モデル ID の指定
        model: MODEL,

        // 質問内容
        messages: [
          {
            role: 'user',
            content: message,
          },
          {
            role: 'assistant',
            content: '形式:true',
          },

          {
            role: 'system',
            content: process.env.REACT_APP_PROMPT,
          },
        ],
        temperature: 0,
      },
      {
        // 送信する HTTP ヘッダー(認証情報)
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      },
    );
    // 回答の取得
    if (response.data.choices[0].message.content === 'false') {
      debugger;
      return message; //引数desc;
    } else {
      console.log(response.data.choices[0].message.content);
      debugger;
      return '誹謗中傷です';
    }
  } catch (error) {
    console.error(error);
    return 'error';
  }
};
