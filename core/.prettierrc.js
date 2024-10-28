module.exports = {
	trailingComma: 'all',
	tabWidth: 3,
	semi: false,
	singleQuote: true,
	useTabs: true,
	printWidth: 120,
	arrowParens: 'avoid',
	plugins: ['prettier-plugin-solidity'],
	overrides: [
		{
			files: [
				'contracts/upgradeInitializers/DiamondInit.sol',
				'contracts/interfaces/IDiamondLoupe.sol',
				'contracts/facets-arga/TreasuryFacet.sol',
				'contracts/facets-arga/DeclarationFacet.sol',
				'contracts/Arga.sol',
			],
			options: {
				endOfLine: 'crlf',
			},
		},
	],
}
