const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.NEXT_PUBLIC_API_URL, // از متغیر محیطی برای مقدار پایه استفاده کنید
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
