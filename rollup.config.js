import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const config = [
  {
  input: 'src/Simple.tsx',
  output: [
      {
          file: 'dist/simple-react-component.js',
          format: 'iife',
          name: 'SimpleReactComponent',
          // Specify globals
          globals: {
              'react': 'React',
              'react-dom': 'ReactDOM'
          },
      }
  ],
  plugins: [
    resolve(), // Resolves node modules
    typescript(), // Handle TypeScript
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'], // Transforms JSX
    }),
  ],
  external: ['react', 'react-dom'],
}];

export default config;
