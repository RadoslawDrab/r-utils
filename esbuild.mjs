import * as esbuild from 'esbuild'

esbuild.buildSync({
	bundle: true,
	minify: true,
	entryPoints: ['./src/index.ts'],
	platform: 'node',
	format: 'esm',
	outfile: 'dist/index.js',
	sourcemap: 'external',
	treeShaking: true,
	tsconfig: './tsconfig.json'
})
