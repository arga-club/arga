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
// ArgaDiamond
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const argaDiamondAbi = [
	{
		type: 'error',
		inputs: [{ name: 'actor', internalType: 'address', type: 'address' }],
		name: 'InvalidActor',
	},
	{
		type: 'error',
		inputs: [{ name: 'witness', internalType: 'address', type: 'address' }],
		name: 'InvalidWitness',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'declaration',
				internalType: 'struct ArgaLibrary.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DeclarationStatus',
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
						internalType: 'struct ArgaLibrary.Collateral',
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
					{ name: 'drawId', internalType: 'uint64', type: 'uint64' },
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
				internalType: 'struct ArgaLibrary.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DeclarationStatus',
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
						internalType: 'struct ArgaLibrary.Collateral',
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
					{ name: 'drawId', internalType: 'uint64', type: 'uint64' },
				],
				indexed: false,
			},
		],
		name: 'DeclarationStatusChange',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'drawId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false,
			},
		],
		name: 'PoolDrawn',
	},
	{
		type: 'function',
		inputs: [{ name: 'actor', internalType: 'address', type: 'address' }],
		name: 'actorDeclarations',
		outputs: [
			{
				name: '',
				internalType: 'struct ArgaLibrary.Declaration[]',
				type: 'tuple[]',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DeclarationStatus',
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
						internalType: 'struct ArgaLibrary.Collateral',
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
					{ name: 'drawId', internalType: 'uint64', type: 'uint64' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'actor', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'communityDeclarations',
		outputs: [
			{
				name: '',
				internalType: 'struct ArgaLibrary.Declaration[]',
				type: 'tuple[]',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DeclarationStatus',
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
						internalType: 'struct ArgaLibrary.Collateral',
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
					{ name: 'drawId', internalType: 'uint64', type: 'uint64' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'randomNumber', internalType: 'bytes32', type: 'bytes32' },
		],
		name: 'concludeDeclarationWithApproval',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'randomNumber', internalType: 'bytes32', type: 'bytes32' },
		],
		name: 'concludeDeclarationWithRejection',
		outputs: [],
		stateMutability: 'nonpayable',
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
				internalType: 'struct ArgaLibrary.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DeclarationStatus',
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
						internalType: 'struct ArgaLibrary.Collateral',
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
					{ name: 'drawId', internalType: 'uint64', type: 'uint64' },
				],
			},
		],
		stateMutability: 'payable',
	},
	{
		type: 'function',
		inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
		name: 'getDeclaration',
		outputs: [
			{
				name: '',
				internalType: 'struct ArgaLibrary.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DeclarationStatus',
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
						internalType: 'struct ArgaLibrary.Collateral',
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
					{ name: 'drawId', internalType: 'uint64', type: 'uint64' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'proof', internalType: 'string', type: 'string' },
		],
		name: 'submitDeclarationProof',
		outputs: [
			{
				name: '',
				internalType: 'struct ArgaLibrary.Declaration',
				type: 'tuple',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DeclarationStatus',
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
						internalType: 'struct ArgaLibrary.Collateral',
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
					{ name: 'drawId', internalType: 'uint64', type: 'uint64' },
				],
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: 'witness', internalType: 'address', type: 'address' }],
		name: 'witnessDeclarations',
		outputs: [
			{
				name: '',
				internalType: 'struct ArgaLibrary.Declaration[]',
				type: 'tuple[]',
				components: [
					{ name: 'id', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DeclarationStatus',
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
						internalType: 'struct ArgaLibrary.Collateral',
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
					{ name: 'drawId', internalType: 'uint64', type: 'uint64' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'error',
		inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
		name: 'InvalidEntropyContract',
	},
	{
		type: 'error',
		inputs: [{ name: '_invalidAddress', internalType: 'address', type: 'address' }],
		name: 'OwnableUnauthorizedAccount',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'sequence', internalType: 'uint64', type: 'uint64' },
			{ name: 'provider', internalType: 'address', type: 'address' },
			{ name: 'randomNumber', internalType: 'bytes32', type: 'bytes32' },
		],
		name: '_entropyCallback',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: '_winMultiplier', internalType: 'uint256', type: 'uint256' }],
		name: 'changeWinMultiplier',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: 'drawId', internalType: 'uint64', type: 'uint64' }],
		name: 'draw',
		outputs: [
			{
				name: '',
				internalType: 'struct ArgaLibrary.Draw',
				type: 'tuple',
				components: [
					{ name: 'declarationId', internalType: 'uint256', type: 'uint256' },
					{
						name: 'pool',
						internalType: 'struct ArgaLibrary.Collateral[]',
						type: 'tuple[]',
						components: [
							{ name: 'value', internalType: 'uint256', type: 'uint256' },
							{
								name: 'erc20Address',
								internalType: 'address',
								type: 'address',
							},
						],
					},
					{ name: 'chanceToWin', internalType: 'uint256', type: 'uint256' },
					{
						name: 'status',
						internalType: 'enum ArgaLibrary.DrawStatus',
						type: 'uint8',
					},
					{ name: 'value', internalType: 'uint256', type: 'uint256' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [],
		name: 'pool',
		outputs: [
			{
				name: '',
				internalType: 'struct ArgaLibrary.Collateral[]',
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
		name: 'winMultiplier',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		inputs: [
			{ name: 'destination', internalType: 'address payable', type: 'address' },
			{ name: 'erc20Addresses', internalType: 'address[]', type: 'address[]' },
		],
		name: 'redeem',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [{ name: 'party', internalType: 'address', type: 'address' }],
		name: 'redemptionsForParty',
		outputs: [
			{
				name: '',
				internalType: 'struct ArgaLibrary.Collateral[]',
				type: 'tuple[]',
				components: [
					{ name: 'value', internalType: 'uint256', type: 'uint256' },
					{ name: 'erc20Address', internalType: 'address', type: 'address' },
				],
			},
		],
		stateMutability: 'view',
	},
	{ type: 'error', inputs: [], name: 'ZeroAddress' },
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
	{
		type: 'function',
		inputs: [{ name: 'newTreasurer', internalType: 'address', type: 'address' }],
		name: 'changeTreasurer',
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		inputs: [],
		name: 'treasurer',
		outputs: [{ name: '_treasurer', internalType: 'address', type: 'address' }],
		stateMutability: 'view',
	},
	{
		type: 'error',
		inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
		name: 'OwnableInvalidOwner',
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
		outputs: [{ name: 'owner_', internalType: 'address', type: 'address' }],
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
		inputs: [{ name: '_newOwner', internalType: 'address', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
	},
] as const

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const argaDiamondAddress = {
	11155420: '0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f',
} as const

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const argaDiamondConfig = {
	address: argaDiamondAddress,
	abi: argaDiamondAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamond = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"actorDeclarations"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondActorDeclarations = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'actorDeclarations',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"communityDeclarations"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondCommunityDeclarations = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'communityDeclarations',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"getDeclaration"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondGetDeclaration = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'getDeclaration',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"witnessDeclarations"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondWitnessDeclarations = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'witnessDeclarations',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"draw"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondDraw = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'draw',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"pool"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondPool = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'pool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"winMultiplier"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondWinMultiplier = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'winMultiplier',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redemptionsForParty"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondRedemptionsForParty = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'redemptionsForParty',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"treasurer"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondTreasurer = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'treasurer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useReadArgaDiamondOwner = /*#__PURE__*/ createUseReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamond = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondConcludeDeclarationWithApproval = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'concludeDeclarationWithApproval',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondConcludeDeclarationWithRejection = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'concludeDeclarationWithRejection',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"declareWithEther"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondDeclareWithEther = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'declareWithEther',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"submitDeclarationProof"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondSubmitDeclarationProof = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'submitDeclarationProof',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"_entropyCallback"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondEntropyCallback = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: '_entropyCallback',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeWinMultiplier"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondChangeWinMultiplier = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'changeWinMultiplier',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondRedeem = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'redeem',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeTreasurer"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondChangeTreasurer = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'changeTreasurer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondRenounceOwnership = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWriteArgaDiamondTransferOwnership = /*#__PURE__*/ createUseWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamond = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondConcludeDeclarationWithApproval = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'concludeDeclarationWithApproval',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondConcludeDeclarationWithRejection = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'concludeDeclarationWithRejection',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"declareWithEther"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondDeclareWithEther = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'declareWithEther',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"submitDeclarationProof"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondSubmitDeclarationProof = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'submitDeclarationProof',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"_entropyCallback"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondEntropyCallback = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: '_entropyCallback',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeWinMultiplier"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondChangeWinMultiplier = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'changeWinMultiplier',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondRedeem = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'redeem',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeTreasurer"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondChangeTreasurer = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'changeTreasurer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondRenounceOwnership = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useSimulateArgaDiamondTransferOwnership = /*#__PURE__*/ createUseSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWatchArgaDiamondEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"DeclarationMade"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWatchArgaDiamondDeclarationMadeEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'DeclarationMade',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"DeclarationStatusChange"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWatchArgaDiamondDeclarationStatusChangeEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'DeclarationStatusChange',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"PoolDrawn"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWatchArgaDiamondPoolDrawnEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'PoolDrawn',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"TreasurerChanged"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWatchArgaDiamondTreasurerChangedEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'TreasurerChanged',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const useWatchArgaDiamondOwnershipTransferredEvent = /*#__PURE__*/ createUseWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'OwnershipTransferred',
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamond = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"actorDeclarations"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondActorDeclarations = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'actorDeclarations',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"communityDeclarations"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondCommunityDeclarations = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'communityDeclarations',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"getDeclaration"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondGetDeclaration = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'getDeclaration',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"witnessDeclarations"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondWitnessDeclarations = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'witnessDeclarations',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"draw"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondDraw = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'draw',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"pool"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondPool = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'pool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"winMultiplier"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondWinMultiplier = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'winMultiplier',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redemptionsForParty"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondRedemptionsForParty = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'redemptionsForParty',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"treasurer"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondTreasurer = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'treasurer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const readArgaDiamondOwner = /*#__PURE__*/ createReadContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamond = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondConcludeDeclarationWithApproval = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'concludeDeclarationWithApproval',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondConcludeDeclarationWithRejection = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'concludeDeclarationWithRejection',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"declareWithEther"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondDeclareWithEther = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'declareWithEther',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"submitDeclarationProof"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondSubmitDeclarationProof = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'submitDeclarationProof',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"_entropyCallback"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondEntropyCallback = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: '_entropyCallback',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeWinMultiplier"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondChangeWinMultiplier = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'changeWinMultiplier',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondRedeem = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeTreasurer"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondChangeTreasurer = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'changeTreasurer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondRenounceOwnership = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const writeArgaDiamondTransferOwnership = /*#__PURE__*/ createWriteContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamond = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondConcludeDeclarationWithApproval = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'concludeDeclarationWithApproval',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondConcludeDeclarationWithRejection = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'concludeDeclarationWithRejection',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"declareWithEther"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondDeclareWithEther = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'declareWithEther',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"submitDeclarationProof"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondSubmitDeclarationProof = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'submitDeclarationProof',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"_entropyCallback"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondEntropyCallback = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: '_entropyCallback',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeWinMultiplier"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondChangeWinMultiplier = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'changeWinMultiplier',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondRedeem = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeTreasurer"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondChangeTreasurer = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'changeTreasurer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondRenounceOwnership = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const simulateArgaDiamondTransferOwnership = /*#__PURE__*/ createSimulateContract({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const watchArgaDiamondEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"DeclarationMade"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const watchArgaDiamondDeclarationMadeEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'DeclarationMade',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"DeclarationStatusChange"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const watchArgaDiamondDeclarationStatusChangeEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'DeclarationStatusChange',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"PoolDrawn"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const watchArgaDiamondPoolDrawnEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'PoolDrawn',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"TreasurerChanged"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const watchArgaDiamondTreasurerChangedEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'TreasurerChanged',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f)
 */
export const watchArgaDiamondOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
	abi: argaDiamondAbi,
	address: argaDiamondAddress,
	eventName: 'OwnershipTransferred',
})
