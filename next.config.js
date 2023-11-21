export default {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.CLIENT_URL
          ? `${process.env.CLIENT_URL}/:path*`
          : 'http://localhost:8000/:path*',
      },
    ];
  },
};
// common.js形式だとpackaje.jsonの{type:"module"}と矛盾が起きるのでejs方式で書いた
