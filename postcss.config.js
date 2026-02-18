import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import postcssInlineSvg from 'postcss-inline-svg';
const config = {
    plugins: [
        autoprefixer(),
        postcssInlineSvg(),
        cssnanoPlugin({
            preset: [
                'default',
                {
                    svgo: {
                        plugins: [
                            {
                                name: 'preset-default',
                            },
                            {
                                name: 'removeViewBox',
                                active: false
                            },
                        ],
                    },
                },
            ],
        }),
    ],
};

export default config;
