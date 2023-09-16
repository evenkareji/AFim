export default {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/:path*',
      },
    ];
  },
};
// common.js形式だとpackaje.jsonの{type:"module"}と矛盾が起きるのでejs方式で書いた
