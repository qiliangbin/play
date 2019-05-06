module.exports = {
    devServer: {
        // open: process.platform === 'darwin',
        // host: '0.0.0.0',
        port: 7777,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        // before: app => {}
    },
}