import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';


export default [{
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'code'
    },
    plugins: [
        // Resolve needed for require to work
        resolve(),

        typescript(),

        // Needed for process.cwd()
        nodePolyfills({
            include: null
        }),
        commonjs(
            {
                dynamicRequireTargets: [
                    // Is this needed in addition to nodePolyfills?
                    'node_modules/rollup-plugin-polyfill-node/dist/**/*.js',

                    // Can it link directly to reduce file size?
                    // 'node_modules/rollup-plugin-polyfill-node/polyfills/process-es6.js',
                ],

                // .ts extension needed for json() to work
                extensions: ['.js', '.ts']
            }
        ),

        json(),
    ]
}];