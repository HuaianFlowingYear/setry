const { defineConfig } = require('@vue/cli-service')
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            sentryWebpackPlugin({
                org: 'huaian',
                project: 'vue-creey',
                authToken: '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',
            })
        ]
    }
})