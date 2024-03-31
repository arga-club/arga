import {
	createUseReadContract,
	createUseWriteContract,
	createUseSimulateContract,
	createUseWatchContractEvent,
} from 'wagmi/codegen'
import {
	createReadContract,
	createWriteContract,
	createSimulateContract,
	createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arga
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
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
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const argaAddress = {
	31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
	11155111: '0x0325c0e405793BF97583F00e42fb7230fD74845B',
} as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArga = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"actorDeclarations"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaActorDeclarations = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'actorDeclarations',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declaration"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaDeclaration = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declaration',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"name"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaName = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"owner"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaOwner = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"poolCollateral"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaPoolCollateral = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'poolCollateral',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"redemptionsForParty"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaRedemptionsForParty = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'redemptionsForParty',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"treasurer"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaTreasurer = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'treasurer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"treasurerRedemptionPercentage"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaTreasurerRedemptionPercentage = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'treasurerRedemptionPercentage',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"witnessDeclarations"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useReadArgaWitnessDeclarations = /*#__PURE__*/ createUseReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'witnessDeclarations',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArga = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"changeTreasurer"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArgaChangeTreasurer = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'changeTreasurer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArgaConcludeDeclarationWithApproval = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'concludeDeclarationWithApproval',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArgaConcludeDeclarationWithRejection = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'concludeDeclarationWithRejection',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declareWithEther"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArgaDeclareWithEther = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declareWithEther',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declareWithToken"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArgaDeclareWithToken = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declareWithToken',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArgaRenounceOwnership = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"submitDeclarationProof"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArgaSubmitDeclarationProof = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'submitDeclarationProof',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWriteArgaTransferOwnership = /*#__PURE__*/ createUseWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArga = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"changeTreasurer"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArgaChangeTreasurer = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'changeTreasurer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArgaConcludeDeclarationWithApproval = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'concludeDeclarationWithApproval',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArgaConcludeDeclarationWithRejection = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'concludeDeclarationWithRejection',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declareWithEther"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArgaDeclareWithEther = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declareWithEther',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declareWithToken"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArgaDeclareWithToken = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declareWithToken',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArgaRenounceOwnership = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"submitDeclarationProof"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArgaSubmitDeclarationProof = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'submitDeclarationProof',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useSimulateArgaTransferOwnership = /*#__PURE__*/ createUseSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWatchArgaEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DeclarationConcludedWithApproval"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWatchArgaDeclarationConcludedWithApprovalEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'DeclarationConcludedWithApproval',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DeclarationConcludedWithRejection"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWatchArgaDeclarationConcludedWithRejectionEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'DeclarationConcludedWithRejection',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DeclarationMade"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWatchArgaDeclarationMadeEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'DeclarationMade',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DeclarationProofSubmitted"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWatchArgaDeclarationProofSubmittedEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'DeclarationProofSubmitted',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWatchArgaOwnershipTransferredEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"TreasurerChanged"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const useWatchArgaTreasurerChangedEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'TreasurerChanged',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useReadLock = /*#__PURE__*/ createUseReadContract({ abi: lockAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLockOwner = /*#__PURE__*/ createUseReadContract({
	abi: lockAbi,
	functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"unlockTime"`
 */
export const useReadLockUnlockTime = /*#__PURE__*/ createUseReadContract({
	abi: lockAbi,
	functionName: 'unlockTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useWriteLock = /*#__PURE__*/ createUseWriteContract({
	abi: lockAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteLockWithdraw = /*#__PURE__*/ createUseWriteContract({
	abi: lockAbi,
	functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useSimulateLock = /*#__PURE__*/ createUseSimulateContract({
	abi: lockAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateLockWithdraw = /*#__PURE__*/ createUseSimulateContract({
	abi: lockAbi,
	functionName: 'withdraw',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockAbi}__
 */
export const useWatchLockEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: lockAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchLockWithdrawalEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: lockAbi,
	eventName: 'Withdrawal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useReadOwnable = /*#__PURE__*/ createUseReadContract({
	abi: ownableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnableOwner = /*#__PURE__*/ createUseReadContract({
	abi: ownableAbi,
	functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWriteOwnable = /*#__PURE__*/ createUseWriteContract({
	abi: ownableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnableRenounceOwnership = /*#__PURE__*/ createUseWriteContract({
	abi: ownableAbi,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnableTransferOwnership = /*#__PURE__*/ createUseWriteContract({
	abi: ownableAbi,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useSimulateOwnable = /*#__PURE__*/ createUseSimulateContract({
	abi: ownableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnableRenounceOwnership = /*#__PURE__*/ createUseSimulateContract({
	abi: ownableAbi,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnableTransferOwnership = /*#__PURE__*/ createUseSimulateContract({
	abi: ownableAbi,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWatchOwnableEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: ownableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnableOwnershipTransferredEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: ownableAbi,
	eventName: 'OwnershipTransferred',
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArga = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"actorDeclarations"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaActorDeclarations = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'actorDeclarations',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declaration"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaDeclaration = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declaration',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"name"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaName = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"owner"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaOwner = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"poolCollateral"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaPoolCollateral = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'poolCollateral',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"redemptionsForParty"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaRedemptionsForParty = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'redemptionsForParty',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"treasurer"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaTreasurer = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'treasurer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"treasurerRedemptionPercentage"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaTreasurerRedemptionPercentage = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'treasurerRedemptionPercentage',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"witnessDeclarations"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const readArgaWitnessDeclarations = /*#__PURE__*/ createReadContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'witnessDeclarations',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArga = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"changeTreasurer"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArgaChangeTreasurer = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'changeTreasurer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArgaConcludeDeclarationWithApproval = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'concludeDeclarationWithApproval',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArgaConcludeDeclarationWithRejection = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'concludeDeclarationWithRejection',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declareWithEther"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArgaDeclareWithEther = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declareWithEther',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declareWithToken"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArgaDeclareWithToken = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declareWithToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArgaRenounceOwnership = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"submitDeclarationProof"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArgaSubmitDeclarationProof = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'submitDeclarationProof',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const writeArgaTransferOwnership = /*#__PURE__*/ createWriteContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArga = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"changeTreasurer"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArgaChangeTreasurer = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'changeTreasurer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArgaConcludeDeclarationWithApproval = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'concludeDeclarationWithApproval',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArgaConcludeDeclarationWithRejection = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'concludeDeclarationWithRejection',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declareWithEther"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArgaDeclareWithEther = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declareWithEther',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"declareWithToken"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArgaDeclareWithToken = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'declareWithToken',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArgaRenounceOwnership = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"submitDeclarationProof"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArgaSubmitDeclarationProof = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'submitDeclarationProof',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const simulateArgaTransferOwnership = /*#__PURE__*/ createSimulateContract({
	abi: argaAbi,
	address: argaAddress,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const watchArgaEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DeclarationConcludedWithApproval"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const watchArgaDeclarationConcludedWithApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'DeclarationConcludedWithApproval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DeclarationConcludedWithRejection"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const watchArgaDeclarationConcludedWithRejectionEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'DeclarationConcludedWithRejection',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DeclarationMade"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const watchArgaDeclarationMadeEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'DeclarationMade',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DeclarationProofSubmitted"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const watchArgaDeclarationProofSubmittedEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'DeclarationProofSubmitted',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const watchArgaOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"TreasurerChanged"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0325c0e405793BF97583F00e42fb7230fD74845B)
 */
export const watchArgaTreasurerChangedEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaAbi,
	address: argaAddress,
	eventName: 'TreasurerChanged',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockAbi}__
 */
export const readLock = /*#__PURE__*/ createReadContract({ abi: lockAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"owner"`
 */
export const readLockOwner = /*#__PURE__*/ createReadContract({
	abi: lockAbi,
	functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"unlockTime"`
 */
export const readLockUnlockTime = /*#__PURE__*/ createReadContract({
	abi: lockAbi,
	functionName: 'unlockTime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockAbi}__
 */
export const writeLock = /*#__PURE__*/ createWriteContract({ abi: lockAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeLockWithdraw = /*#__PURE__*/ createWriteContract({
	abi: lockAbi,
	functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockAbi}__
 */
export const simulateLock = /*#__PURE__*/ createSimulateContract({
	abi: lockAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateLockWithdraw = /*#__PURE__*/ createSimulateContract({
	abi: lockAbi,
	functionName: 'withdraw',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockAbi}__
 */
export const watchLockEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: lockAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const watchLockWithdrawalEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: lockAbi,
	eventName: 'Withdrawal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({
	abi: ownableAbi,
	functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({
	abi: ownableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableRenounceOwnership = /*#__PURE__*/ createWriteContract({
	abi: ownableAbi,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
	abi: ownableAbi,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({
	abi: ownableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableRenounceOwnership = /*#__PURE__*/ createSimulateContract({
	abi: ownableAbi,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership = /*#__PURE__*/ createSimulateContract({
	abi: ownableAbi,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: ownableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: ownableAbi,
	eventName: 'OwnershipTransferred',
})
