const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.goal.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api', // Optional: Use this if the Goal.com API has a base path
      },
    })
  );
};
