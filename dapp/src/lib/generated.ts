//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arga
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const argaAbi = [
	{ type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
	{
		type: 'error',
		inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
		name: 'InvalidActor',
	},
	{
		type: 'error',
		inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
		name: 'InvalidWitness',
	},
	{
		type: 'error',
		inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
		name: 'OwnableInvalidOwner',
	},
	{
		type: 'error',
		inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
		name: 'OwnableUnauthorizedAccount',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'declaration',
				internalType: 'struct Arga.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum Arga.DeclarationStatus',
						type: 'uint8',
					},
					{ name: 'summary', internalType: 'string', type: 'string' },
					{ name: 'description', internalType: 'string', type: 'string' },
					{ name: 'actor', internalType: 'address', type: 'address' },
					{ name: 'witness', internalType: 'address', type: 'address' },
					{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
					{
						name: 'collateral',
						internalType: 'struct Arga.Collateral',
						type: 'tuple',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'proof', internalType: 'string', type: 'string' },
				],
				indexed: false,
			},
		],
		name: 'DeclarationConcludedWithApproval',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'declaration',
				internalType: 'struct Arga.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum Arga.DeclarationStatus',
						type: 'uint8',
					},
					{ name: 'summary', internalType: 'string', type: 'string' },
					{ name: 'description', internalType: 'string', type: 'string' },
					{ name: 'actor', internalType: 'address', type: 'address' },
					{ name: 'witness', internalType: 'address', type: 'address' },
					{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
					{
						name: 'collateral',
						internalType: 'struct Arga.Collateral',
						type: 'tuple',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'proof', internalType: 'string', type: 'string' },
				],
				indexed: false,
			},
		],
		name: 'DeclarationConcludedWithRejection',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'declaration',
				internalType: 'struct Arga.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum Arga.DeclarationStatus',
						type: 'uint8',
					},
					{ name: 'summary', internalType: 'string', type: 'string' },
					{ name: 'description', internalType: 'string', type: 'string' },
					{ name: 'actor', internalType: 'address', type: 'address' },
					{ name: 'witness', internalType: 'address', type: 'address' },
					{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
					{
						name: 'collateral',
						internalType: 'struct Arga.Collateral',
						type: 'tuple',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'proof', internalType: 'string', type: 'string' },
				],
				indexed: false,
			},
		],
		name: 'DeclarationMade',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'declaration',
				internalType: 'struct Arga.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum Arga.DeclarationStatus',
						type: 'uint8',
					},
					{ name: 'summary', internalType: 'string', type: 'string' },
					{ name: 'description', internalType: 'string', type: 'string' },
					{ name: 'actor', internalType: 'address', type: 'address' },
					{ name: 'witness', internalType: 'address', type: 'address' },
					{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
					{
						name: 'collateral',
						internalType: 'struct Arga.Collateral',
						type: 'tuple',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'proof', internalType: 'string', type: 'string' },
				],
				indexed: false,
			},
		],
		name: 'DeclarationProofSubmitted',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'previousOwner',
				internalType: 'address',
				type: 'address',
				indexed: true,
			},
			{
				name: 'newOwner',
				internalType: 'address',
				type: 'address',
				indexed: true,
			},
		],
		name: 'OwnershipTransferred',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'treasurer',
				internalType: 'address',
				type: 'address',
				indexed: false,
			},
		],
		name: 'TreasurerChanged',
	},
	{ type: 'fallback', stateMutability: 'payable' },
	{
		type: 'function',
		inputs: [{ name: 'actor', internalType: 'address', type: 'address' }],
		name: 'actorDeclarations',
		outputs: [
			{
				name: '',
				internalType: 'struct Arga.Declaration[]',
				type: 'tuple[]',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum Arga.DeclarationStatus',
						type: 'uint8',
					},
					{ name: 'summary', internalType: 'string', type: 'string' },
					{ name: 'description', internalType: 'string', type: 'string' },
					{ name: 'actor', internalType: 'address', type: 'address' },
					{ name: 'witness', internalType: 'address', type: 'address' },
					{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
					{
						name: 'collateral',
						internalType: 'struct Arga.Collateral',
						type: 'tuple',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'proof', internalType: 'string', type: 'string' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [{ name: 'newTreasurer', internalType: 'address', type: 'address' }],
		name: 'changeTreasurer',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
		name: 'concludeDeclarationWithApproval',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
		name: 'concludeDeclarationWithRejection',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
		name: 'declaration',
		outputs: [
			{
				name: '',
				internalType: 'struct Arga.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum Arga.DeclarationStatus',
						type: 'uint8',
					},
					{ name: 'summary', internalType: 'string', type: 'string' },
					{ name: 'description', internalType: 'string', type: 'string' },
					{ name: 'actor', internalType: 'address', type: 'address' },
					{ name: 'witness', internalType: 'address', type: 'address' },
					{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
					{
						name: 'collateral',
						internalType: 'struct Arga.Collateral',
						type: 'tuple',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'proof', internalType: 'string', type: 'string' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'summary', internalType: 'string', type: 'string' },
			{ name: 'description', internalType: 'string', type: 'string' },
			{ name: 'actor', internalType: 'address', type: 'address' },
			{ name: 'witness', internalType: 'address', type: 'address' },
			{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
			{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
			{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
		],
		name: 'declareWithEther',
		outputs: [
			{
				name: '',
				internalType: 'struct Arga.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum Arga.DeclarationStatus',
						type: 'uint8',
					},
					{ name: 'summary', internalType: 'string', type: 'string' },
					{ name: 'description', internalType: 'string', type: 'string' },
					{ name: 'actor', internalType: 'address', type: 'address' },
					{ name: 'witness', internalType: 'address', type: 'address' },
					{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
					{
						name: 'collateral',
						internalType: 'struct Arga.Collateral',
						type: 'tuple',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'proof', internalType: 'string', type: 'string' },
				],
			},
		],
		stateMutability: 'payable',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'summary', internalType: 'string', type: 'string' },
			{ name: 'description', internalType: 'string', type: 'string' },
			{ name: 'actor', internalType: 'address', type: 'address' },
			{ name: 'witness', internalType: 'address', type: 'address' },
			{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
			{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
			{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
			{ name: 'collateralValue', internalType: 'uint256', type: 'uint256' },
			{
				name: 'collateralErc20Address',
				internalType: 'address',
				type: 'address',
			},
		],
		name: 'declareWithToken',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [],
		name: 'name',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [],
		name: 'owner',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [],
		name: 'poolCollateral',
		outputs: [
			{
				name: '',
				internalType: 'struct Arga.Collateral[]',
				type: 'tuple[]',
				components: [
					{ name: 'value', internalType: 'uint256', type: 'uint256' },
					{ name: 'erc20Address', internalType: 'address', type: 'address' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [{ name: 'party', internalType: 'address', type: 'address' }],
		name: 'redemptionsForParty',
		outputs: [
			{
				name: '',
				internalType: 'struct Arga.Collateral[]',
				type: 'tuple[]',
				components: [
					{ name: 'value', internalType: 'uint256', type: 'uint256' },
					{ name: 'erc20Address', internalType: 'address', type: 'address' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'proof', internalType: 'string', type: 'string' },
		],
		name: 'submitDeclarationProof',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [],
		name: 'treasurer',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [],
		name: 'treasurerRedemptionPercentage',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [{ name: 'witness', internalType: 'address', type: 'address' }],
		name: 'witnessDeclarations',
		outputs: [
			{
				name: '',
				internalType: 'struct Arga.Declaration[]',
				type: 'tuple[]',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum Arga.DeclarationStatus',
						type: 'uint8',
					},
					{ name: 'summary', internalType: 'string', type: 'string' },
					{ name: 'description', internalType: 'string', type: 'string' },
					{ name: 'actor', internalType: 'address', type: 'address' },
					{ name: 'witness', internalType: 'address', type: 'address' },
					{ name: 'startDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'endDate', internalType: 'uint256', type: 'uint256' },
					{ name: 'witnessByDate', internalType: 'uint256', type: 'uint256' },
					{
						name: 'collateral',
						internalType: 'struct Arga.Collateral',
						type: 'tuple',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'proof', internalType: 'string', type: 'string' },
				],
			},
		],
		stateMutability: 'view',
	},
	{ type: 'receive', stateMutability: 'payable' },
] as const

/**
 *
 */
export const argaAddress = {
	31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const

/**
 *
 */
export const argaConfig = { address: argaAddress, abi: argaAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lockAbi = [
	{
		type: 'constructor',
		inputs: [{ name: '_unlockTime', internalType: 'uint256', type: 'uint256' }],
		stateMutability: 'payable',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'amount',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false,
			},
			{
				name: 'when',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false,
			},
		],
		name: 'Withdrawal',
	},
	{
		type: 'function',
		inputs: [],
		name: 'owner',
		outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [],
		name: 'unlockTime',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
	{
		type: 'error',
		inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
		name: 'OwnableInvalidOwner',
	},
	{
		type: 'error',
		inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
		name: 'OwnableUnauthorizedAccount',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'previousOwner',
				internalType: 'address',
				type: 'address',
				indexed: true,
			},
			{
				name: 'newOwner',
				internalType: 'address',
				type: 'address',
				indexed: true,
			},
		],
		name: 'OwnershipTransferred',
	},
	{
		type: 'function',
		inputs: [],
		name: 'owner',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
	},
] as const
