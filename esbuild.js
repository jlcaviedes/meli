const { execSync } = require('child_process');
const { readFileSync, existsSync, rmSync, mkdirSync } = require('fs');
const path = require('path');

const pathPackage = path.join(__dirname, 'package.json');
const pathBuild = path.join(__dirname, 'build');
const pathDist = path.join(__dirname, 'dist', 'index.js');

function copy(source, destination) {
	console.log('source ', source, 'existe', existsSync(source));
	existsSync(source) && execSync(`cp -fr ${source} ${destination}`);
}

function dependencies() {
	let pkg = readFileSync(pathPackage);
	pkg = JSON.parse(pkg);
	return Object.keys(pkg.dependencies || {});
}

/**
 * Elimina la carpeta build y la vuelve a crear
 */
if (existsSync(pathBuild)) {
	rmSync(pathBuild, { recursive: true, force: true });
	mkdirSync(pathBuild);
	mkdirSync(pathBuild + '/assets');
}

require('esbuild').buildSync({
	tsconfig: 'tsconfig.json',
	entryPoints: [pathDist],
	platform: 'node',
	minify: true,
	bundle: true,
	sourcemap: false,
	outfile: pathBuild + '/index.min.js',
	external: dependencies(),
});

[
	{
		source: path.join(__dirname, 'package.json'),
		destination: pathBuild + '/package.json',
	},
	{ source: path.join(__dirname, 'src/assets/'), destination: pathBuild + '/assets/' },
].forEach(({ source, destination }) => copy(source, destination));

process.exit(1);
