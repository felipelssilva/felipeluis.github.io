const proxy = [
  {
    context: "/api",
    target: `https://api-my-website-flame.vercel.app/api`,
    pathRewrite: { "^/api": "" },
    changeOrigin: true,
  },
];

module.exports = proxy;
