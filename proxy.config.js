const proxy = [
    {
        context: '/api',
        target: 'http://localhost:3000/api',
        pathRewrite: { '^/api': '' }
    }
];

module.exports = proxy;