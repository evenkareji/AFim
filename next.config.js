export default {
  async rewrites() {
    return [
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
// local環境でgoogleauth解決できたら何とかなりそうだが、それを解決するにはrootパスをinternetserver errorから解決する必要がある
// リダイレクトが起きてるのはnext.configのせい。そのあとにoauthでもstatus308は起こる

// {
//   source: '/auth/google',
//   destination: `${process.env.API_URL}/auth/google`,
// },
