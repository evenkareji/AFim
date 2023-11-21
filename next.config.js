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
