const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

// next webpack 기본설정이 있기때문에 default값을 바꿔주는 방식으로 가야함. react와는 다름
module.exports = withBundleAnalyzer({
    compress: true,
    webpack(config, {webpack}) {
        const prod = process.env.NODE_ENV === 'production';
        return {
            ...config, //spread가 많이 나와서 힘들면 immer를 사용하면 됨
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'hidden-source-map' : 'eval', // hidden source map 안하면 배포환경에서 소스코드 다 노출됨
            plugins: [
                ...config.plugins,
                new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
            ],
        };
    },
});