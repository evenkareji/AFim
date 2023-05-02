import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-3.5-turbo';
const API_KEY = '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';

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
            content:
              'あなたはbooleanのみを必ず返す機械ですこれ以降「誹謗中傷」が文章内に含まれていたら「true」を作成し文章内に含まれていなかったら「false」を作成###形式:true',
          },
        ],
        temperature: 0,
      },
      {
        // 送信する HTTP ヘッダー(認証情報)
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    );
    // 回答の取得
    if (response.data.choices[0].message.content === 'false') {
      console.log(response.data.choices[0].message.content, 'false');
      return message; //引数desc;
    } else {
      console.log(response.data.choices[0].message.content);

      return '誹謗中傷はやめようねっ';
    }
  } catch (error) {
    console.error(error);
    return 'error';
  }
};
