// jest.config.js
const { defaults } = require('jest-config');
module.exports = {
	verbose: true,
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	collectCoverageFrom: [
		'**/*.{js,jsx,ts}',
		'!src/**/*.interface.ts',
		'!src/modules/products/entities/types/*.ts',
		'!src/**/index.ts',
		'!**/node_modules/**',
		'!**/vendor/**',
	],
	collectCoverage: true,
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10,
		},
	},
};
