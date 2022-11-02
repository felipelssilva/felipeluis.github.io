const proxy = [
  {
    context: "/api",
    target: `${process.env.URL_API}/api`,
    pathRewrite: { "^/api": "" },
    changeOrigin: true,
  },
];

module.exports = proxy;
