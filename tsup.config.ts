import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'icons/index': 'src/icons/index.ts',
    tailwind: 'src/tailwind.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  treeshake: true,
  minify: false,
  outDir: 'dist',
});

