export default {
  async rewrites() {
    return [
      {
        source: '/auth/google',
        destination: `${process.env.API_URL}/auth/google`,
      },
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
};
// common.js形式だとpackaje.jsonの{type:"module"}と矛盾が起きるのでejs方式で書いた
// サーバーにエラーあるからサーバーのurlだよなぁまずはルートパスを表示させたい
// サイトそのものに問題があるためurlはあっているがstatus308になる
