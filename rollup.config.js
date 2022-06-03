import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const pkg = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      sourcemap: true,
      format: "cjs",
    },
    {
      file: pkg.module,
      sourcemap: true,
      format: "esm",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
};
