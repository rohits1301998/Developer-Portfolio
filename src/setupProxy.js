const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/__/firebase/init.json",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: false,
      pathRewrite: {
        "^/__/firebase/init.json": "/assets/firebase-config.json",
      },
    })
  );
};
