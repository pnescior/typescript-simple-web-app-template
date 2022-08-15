import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import {terser} from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [
        typescript(),
        nodeResolve(),
        scss(),
        copy({
            targets: [
                {src: 'src/index.html', dest: 'dist/'}
            ]
        }),
        terser()
    ]
};
