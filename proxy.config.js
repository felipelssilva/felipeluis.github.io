const proxy = [
    {
        context: '/api',
        // target: 'http://localhost:3000/api',
        target: 'https://quiet-harbor-71572.herokuapp.com/api',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
    }
];

module.exports = proxy;
