import {
  createUseWatchContractEvent,
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

import {
  createWatchContractEvent,
  createReadContract,
  createWriteContract,
  createSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arga
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const argaAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_contractOwner', internalType: 'address', type: 'address' },
      { name: '_diamondCutFacet', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'error',
    inputs: [
      {
        name: '_initializationContractAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: '_calldata', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'InitializationFunctionReverted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_diamondCut',
        internalType: 'struct IDiamondCut.FacetCut[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'action',
            internalType: 'enum IDiamondCut.FacetCutAction',
            type: 'uint8',
          },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
        indexed: false,
      },
      {
        name: '_init',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_calldata',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DiamondCut',
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
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const argaAddress = {
  11155420: '0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2',
} as const

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const argaConfig = { address: argaAddress, abi: argaAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArgaDiamond
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    inputs: [
      { name: '_invalidAddress', internalType: 'address', type: 'address' },
    ],
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
    inputs: [
      { name: 'winMultiplier', internalType: 'uint256', type: 'uint256' },
    ],
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
    inputs: [
      { name: 'newTreasurer', internalType: 'address', type: 'address' },
    ],
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArgaLibrary
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const argaLibraryAbi = [
  {
    type: 'error',
    inputs: [{ name: 'actor', internalType: 'address', type: 'address' }],
    name: 'InvalidActor',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'InvalidEntropyContract',
  },
  {
    type: 'error',
    inputs: [{ name: 'witness', internalType: 'address', type: 'address' }],
    name: 'InvalidWitness',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
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
        name: 'parentContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ParentContractChanged',
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
    name: 'PoolWon',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DeclarationFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const declarationFacetAbi = [
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DiamondCutFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const diamondCutFacetAbi = [
  {
    type: 'error',
    inputs: [
      {
        name: '_initializationContractAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: '_calldata', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'InitializationFunctionReverted',
  },
  {
    type: 'error',
    inputs: [
      { name: '_invalidAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_diamondCut',
        internalType: 'struct IDiamondCut.FacetCut[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'action',
            internalType: 'enum IDiamondCut.FacetCutAction',
            type: 'uint8',
          },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
        indexed: false,
      },
      {
        name: '_init',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_calldata',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DiamondCut',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_diamondCut',
        internalType: 'struct IDiamondCut.FacetCut[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'action',
            internalType: 'enum IDiamondCut.FacetCutAction',
            type: 'uint8',
          },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
      },
      { name: '_init', internalType: 'address', type: 'address' },
      { name: '_calldata', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'diamondCut',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DiamondInit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const diamondInitAbi = [
  {
    type: 'error',
    inputs: [
      {
        name: 'entropyContractAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'WrongEntropyContractAddress',
  },
  {
    type: 'function',
    inputs: [
      { name: 'treasurer', internalType: 'address', type: 'address' },
      {
        name: 'entropyContractAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_addr', internalType: 'address', type: 'address' }],
    name: 'isContract',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DiamondLoupeFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const diamondLoupeFacetAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'facetAddress',
    outputs: [
      { name: 'facetAddress_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'facetAddresses',
    outputs: [
      { name: 'facetAddresses_', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_facet', internalType: 'address', type: 'address' }],
    name: 'facetFunctionSelectors',
    outputs: [
      {
        name: '_facetFunctionSelectors',
        internalType: 'bytes4[]',
        type: 'bytes4[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'facets',
    outputs: [
      {
        name: 'facets_',
        internalType: 'struct IDiamondLoupe.Facet[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Entropy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const entropyAbi = [
  { type: 'error', inputs: [], name: 'AssertionFailure' },
  { type: 'error', inputs: [], name: 'BlockhashUnavailable' },
  { type: 'error', inputs: [], name: 'IncorrectRevelation' },
  { type: 'error', inputs: [], name: 'InsufficientFee' },
  { type: 'error', inputs: [], name: 'InvalidRevealCall' },
  { type: 'error', inputs: [], name: 'NoSuchProvider' },
  { type: 'error', inputs: [], name: 'NoSuchRequest' },
  { type: 'error', inputs: [], name: 'OutOfRandomness' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFeeManager',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newFeeManager',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProviderFeeManagerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFee',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'newFee',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'ProviderFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'oldUri', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'newUri', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'ProviderUriUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'struct EntropyStructs.ProviderInfo',
        type: 'tuple',
        components: [
          { name: 'feeInWei', internalType: 'uint128', type: 'uint128' },
          {
            name: 'accruedFeesInWei',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'originalCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'originalCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'commitmentMetadata', internalType: 'bytes', type: 'bytes' },
          { name: 'uri', internalType: 'bytes', type: 'bytes' },
          { name: 'endSequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          {
            name: 'currentCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'currentCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'feeManager', internalType: 'address', type: 'address' },
        ],
        indexed: false,
      },
    ],
    name: 'Registered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'Requested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'requestor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sequenceNumber',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'userRandomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'RequestedWithCallback',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
      {
        name: 'userRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'providerRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'blockHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'randomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'Revealed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
      {
        name: 'userRandomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'providerRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'randomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'RevealedWithCallback',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'withdrawnAmount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NUM_REQUESTS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NUM_REQUESTS_MASK',
    outputs: [{ name: '', internalType: 'bytes1', type: 'bytes1' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'userRandomness', internalType: 'bytes32', type: 'bytes32' },
      { name: 'providerRandomness', internalType: 'bytes32', type: 'bytes32' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'combineRandomValues',
    outputs: [
      { name: 'combinedRandomness', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'userRandomness', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'constructUserCommitment',
    outputs: [
      { name: 'userCommitment', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAccruedPythFees',
    outputs: [
      {
        name: 'accruedPythFeesInWei',
        internalType: 'uint128',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDefaultProvider',
    outputs: [{ name: 'provider', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'provider', internalType: 'address', type: 'address' }],
    name: 'getFee',
    outputs: [{ name: 'feeAmount', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'provider', internalType: 'address', type: 'address' }],
    name: 'getProviderInfo',
    outputs: [
      {
        name: 'info',
        internalType: 'struct EntropyStructs.ProviderInfo',
        type: 'tuple',
        components: [
          { name: 'feeInWei', internalType: 'uint128', type: 'uint128' },
          {
            name: 'accruedFeesInWei',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'originalCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'originalCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'commitmentMetadata', internalType: 'bytes', type: 'bytes' },
          { name: 'uri', internalType: 'bytes', type: 'bytes' },
          { name: 'endSequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          {
            name: 'currentCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'currentCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'feeManager', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPythFee',
    outputs: [{ name: 'feeAmount', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getRequest',
    outputs: [
      {
        name: 'req',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'feeInWei', internalType: 'uint128', type: 'uint128' },
      { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
      { name: 'commitmentMetadata', internalType: 'bytes', type: 'bytes' },
      { name: 'chainLength', internalType: 'uint64', type: 'uint64' },
      { name: 'uri', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'userCommitment', internalType: 'bytes32', type: 'bytes32' },
      { name: 'useBlockHash', internalType: 'bool', type: 'bool' },
    ],
    name: 'request',
    outputs: [
      {
        name: 'assignedSequenceNumber',
        internalType: 'uint64',
        type: 'uint64',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'userRandomNumber', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'requestWithCallback',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
      { name: 'userRevelation', internalType: 'bytes32', type: 'bytes32' },
      { name: 'providerRevelation', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'reveal',
    outputs: [
      { name: 'randomNumber', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
      { name: 'userRandomNumber', internalType: 'bytes32', type: 'bytes32' },
      { name: 'providerRevelation', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'revealWithCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'manager', internalType: 'address', type: 'address' }],
    name: 'setFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newFeeInWei', internalType: 'uint128', type: 'uint128' }],
    name: 'setProviderFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'newFeeInWei', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'setProviderFeeAsFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newUri', internalType: 'bytes', type: 'bytes' }],
    name: 'setProviderUri',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint128', type: 'uint128' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'withdrawAsFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EntropyErrors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const entropyErrorsAbi = [
  { type: 'error', inputs: [], name: 'AssertionFailure' },
  { type: 'error', inputs: [], name: 'BlockhashUnavailable' },
  { type: 'error', inputs: [], name: 'IncorrectRevelation' },
  { type: 'error', inputs: [], name: 'InsufficientFee' },
  { type: 'error', inputs: [], name: 'InvalidRevealCall' },
  { type: 'error', inputs: [], name: 'InvalidUpgradeMagic' },
  { type: 'error', inputs: [], name: 'NoSuchProvider' },
  { type: 'error', inputs: [], name: 'NoSuchRequest' },
  { type: 'error', inputs: [], name: 'OutOfRandomness' },
  { type: 'error', inputs: [], name: 'ProviderAlreadyRegistered' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EntropyEvents
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const entropyEventsAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFeeManager',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newFeeManager',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProviderFeeManagerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFee',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'newFee',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'ProviderFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'oldUri', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'newUri', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'ProviderUriUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'struct EntropyStructs.ProviderInfo',
        type: 'tuple',
        components: [
          { name: 'feeInWei', internalType: 'uint128', type: 'uint128' },
          {
            name: 'accruedFeesInWei',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'originalCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'originalCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'commitmentMetadata', internalType: 'bytes', type: 'bytes' },
          { name: 'uri', internalType: 'bytes', type: 'bytes' },
          { name: 'endSequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          {
            name: 'currentCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'currentCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'feeManager', internalType: 'address', type: 'address' },
        ],
        indexed: false,
      },
    ],
    name: 'Registered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'Requested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'requestor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sequenceNumber',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'userRandomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'RequestedWithCallback',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
      {
        name: 'userRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'providerRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'blockHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'randomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'Revealed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
      {
        name: 'userRandomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'providerRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'randomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'RevealedWithCallback',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'withdrawnAmount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EntropyState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const entropyStateAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'NUM_REQUESTS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NUM_REQUESTS_MASK',
    outputs: [{ name: '', internalType: 'bytes1', type: 'bytes1' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IDiamondCut
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iDiamondCutAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_diamondCut',
        internalType: 'struct IDiamondCut.FacetCut[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'action',
            internalType: 'enum IDiamondCut.FacetCutAction',
            type: 'uint8',
          },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
        indexed: false,
      },
      {
        name: '_init',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_calldata',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DiamondCut',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_diamondCut',
        internalType: 'struct IDiamondCut.FacetCut[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'action',
            internalType: 'enum IDiamondCut.FacetCutAction',
            type: 'uint8',
          },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
      },
      { name: '_init', internalType: 'address', type: 'address' },
      { name: '_calldata', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'diamondCut',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IDiamondLoupe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iDiamondLoupeAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'facetAddress',
    outputs: [
      { name: 'facetAddress_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'facetAddresses',
    outputs: [
      { name: 'facetAddresses_', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_facet', internalType: 'address', type: 'address' }],
    name: 'facetFunctionSelectors',
    outputs: [
      {
        name: 'facetFunctionSelectors_',
        internalType: 'bytes4[]',
        type: 'bytes4[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'facets',
    outputs: [
      {
        name: 'facets_',
        internalType: 'struct IDiamondLoupe.Facet[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC173
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc173Abi = [
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
    inputs: [{ name: '_newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IEntropy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iEntropyAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFeeManager',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newFeeManager',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProviderFeeManagerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFee',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'newFee',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'ProviderFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'oldUri', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'newUri', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'ProviderUriUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'struct EntropyStructs.ProviderInfo',
        type: 'tuple',
        components: [
          { name: 'feeInWei', internalType: 'uint128', type: 'uint128' },
          {
            name: 'accruedFeesInWei',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'originalCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'originalCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'commitmentMetadata', internalType: 'bytes', type: 'bytes' },
          { name: 'uri', internalType: 'bytes', type: 'bytes' },
          { name: 'endSequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          {
            name: 'currentCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'currentCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'feeManager', internalType: 'address', type: 'address' },
        ],
        indexed: false,
      },
    ],
    name: 'Registered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'Requested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'requestor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sequenceNumber',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'userRandomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'RequestedWithCallback',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
      {
        name: 'userRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'providerRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'blockHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'randomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'Revealed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'request',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
      {
        name: 'userRandomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'providerRevelation',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'randomNumber',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'RevealedWithCallback',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'withdrawnAmount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'function',
    inputs: [
      { name: 'userRandomness', internalType: 'bytes32', type: 'bytes32' },
      { name: 'providerRandomness', internalType: 'bytes32', type: 'bytes32' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'combineRandomValues',
    outputs: [
      { name: 'combinedRandomness', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'userRandomness', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'constructUserCommitment',
    outputs: [
      { name: 'userCommitment', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAccruedPythFees',
    outputs: [
      {
        name: 'accruedPythFeesInWei',
        internalType: 'uint128',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDefaultProvider',
    outputs: [{ name: 'provider', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'provider', internalType: 'address', type: 'address' }],
    name: 'getFee',
    outputs: [{ name: 'feeAmount', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'provider', internalType: 'address', type: 'address' }],
    name: 'getProviderInfo',
    outputs: [
      {
        name: 'info',
        internalType: 'struct EntropyStructs.ProviderInfo',
        type: 'tuple',
        components: [
          { name: 'feeInWei', internalType: 'uint128', type: 'uint128' },
          {
            name: 'accruedFeesInWei',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'originalCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'originalCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'commitmentMetadata', internalType: 'bytes', type: 'bytes' },
          { name: 'uri', internalType: 'bytes', type: 'bytes' },
          { name: 'endSequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          {
            name: 'currentCommitment',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'currentCommitmentSequenceNumber',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'feeManager', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getRequest',
    outputs: [
      {
        name: 'req',
        internalType: 'struct EntropyStructs.Request',
        type: 'tuple',
        components: [
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'numHashes', internalType: 'uint32', type: 'uint32' },
          { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'requester', internalType: 'address', type: 'address' },
          { name: 'useBlockhash', internalType: 'bool', type: 'bool' },
          { name: 'isRequestWithCallback', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'feeInWei', internalType: 'uint128', type: 'uint128' },
      { name: 'commitment', internalType: 'bytes32', type: 'bytes32' },
      { name: 'commitmentMetadata', internalType: 'bytes', type: 'bytes' },
      { name: 'chainLength', internalType: 'uint64', type: 'uint64' },
      { name: 'uri', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'userCommitment', internalType: 'bytes32', type: 'bytes32' },
      { name: 'useBlockHash', internalType: 'bool', type: 'bool' },
    ],
    name: 'request',
    outputs: [
      {
        name: 'assignedSequenceNumber',
        internalType: 'uint64',
        type: 'uint64',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'userRandomNumber', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'requestWithCallback',
    outputs: [
      {
        name: 'assignedSequenceNumber',
        internalType: 'uint64',
        type: 'uint64',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
      { name: 'userRevelation', internalType: 'bytes32', type: 'bytes32' },
      { name: 'providerRevelation', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'reveal',
    outputs: [
      { name: 'randomNumber', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'sequenceNumber', internalType: 'uint64', type: 'uint64' },
      { name: 'userRandomNumber', internalType: 'bytes32', type: 'bytes32' },
      { name: 'providerRevelation', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'revealWithCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'manager', internalType: 'address', type: 'address' }],
    name: 'setFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newFeeInWei', internalType: 'uint128', type: 'uint128' }],
    name: 'setProviderFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'newFeeInWei', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'setProviderFeeAsFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newUri', internalType: 'bytes', type: 'bytes' }],
    name: 'setProviderUri',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint128', type: 'uint128' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'withdrawAsFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IEntropyConsumer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iEntropyConsumerAbi = [
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LibDiamond
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const libDiamondAbi = [
  {
    type: 'error',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: '_invalidAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_diamondCut',
        internalType: 'struct IDiamondCut.FacetCut[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'action',
            internalType: 'enum IDiamondCut.FacetCutAction',
            type: 'uint8',
          },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
        indexed: false,
      },
      {
        name: '_init',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_calldata',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DiamondCut',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnershipFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownershipFacetAbi = [
  {
    type: 'error',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: '_invalidAddress', internalType: 'address', type: 'address' },
    ],
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolFacetAbi = [
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'InvalidEntropyContract',
  },
  {
    type: 'error',
    inputs: [
      { name: '_invalidAddress', internalType: 'address', type: 'address' },
    ],
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
    inputs: [
      { name: 'winMultiplier', internalType: 'uint256', type: 'uint256' },
    ],
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RedemptionFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const redemptionFacetAbi = [
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TreasuryFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const treasuryFacetAbi = [
  {
    type: 'error',
    inputs: [
      { name: '_invalidAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableUnauthorizedAccount',
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
    inputs: [
      { name: 'newTreasurer', internalType: 'address', type: 'address' },
    ],
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const useWatchArgaEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: argaAbi,
  address: argaAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DiamondCut"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const useWatchArgaDiamondCutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaAbi,
    address: argaAddress,
    eventName: 'DiamondCut',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const useWatchArgaOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaAbi,
    address: argaAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__
 */
export const useReadArgaDiamond = /*#__PURE__*/ createUseReadContract({
  abi: argaDiamondAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"actorDeclarations"`
 */
export const useReadArgaDiamondActorDeclarations =
  /*#__PURE__*/ createUseReadContract({
    abi: argaDiamondAbi,
    functionName: 'actorDeclarations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"communityDeclarations"`
 */
export const useReadArgaDiamondCommunityDeclarations =
  /*#__PURE__*/ createUseReadContract({
    abi: argaDiamondAbi,
    functionName: 'communityDeclarations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"getDeclaration"`
 */
export const useReadArgaDiamondGetDeclaration =
  /*#__PURE__*/ createUseReadContract({
    abi: argaDiamondAbi,
    functionName: 'getDeclaration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"witnessDeclarations"`
 */
export const useReadArgaDiamondWitnessDeclarations =
  /*#__PURE__*/ createUseReadContract({
    abi: argaDiamondAbi,
    functionName: 'witnessDeclarations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"draw"`
 */
export const useReadArgaDiamondDraw = /*#__PURE__*/ createUseReadContract({
  abi: argaDiamondAbi,
  functionName: 'draw',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"pool"`
 */
export const useReadArgaDiamondPool = /*#__PURE__*/ createUseReadContract({
  abi: argaDiamondAbi,
  functionName: 'pool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redemptionsForParty"`
 */
export const useReadArgaDiamondRedemptionsForParty =
  /*#__PURE__*/ createUseReadContract({
    abi: argaDiamondAbi,
    functionName: 'redemptionsForParty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"treasurer"`
 */
export const useReadArgaDiamondTreasurer = /*#__PURE__*/ createUseReadContract({
  abi: argaDiamondAbi,
  functionName: 'treasurer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"owner"`
 */
export const useReadArgaDiamondOwner = /*#__PURE__*/ createUseReadContract({
  abi: argaDiamondAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__
 */
export const useWriteArgaDiamond = /*#__PURE__*/ createUseWriteContract({
  abi: argaDiamondAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 */
export const useWriteArgaDiamondConcludeDeclarationWithApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: 'concludeDeclarationWithApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 */
export const useWriteArgaDiamondConcludeDeclarationWithRejection =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: 'concludeDeclarationWithRejection',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"declareWithEther"`
 */
export const useWriteArgaDiamondDeclareWithEther =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: 'declareWithEther',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"submitDeclarationProof"`
 */
export const useWriteArgaDiamondSubmitDeclarationProof =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: 'submitDeclarationProof',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const useWriteArgaDiamondEntropyCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeWinMultiplier"`
 */
export const useWriteArgaDiamondChangeWinMultiplier =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: 'changeWinMultiplier',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteArgaDiamondRedeem = /*#__PURE__*/ createUseWriteContract({
  abi: argaDiamondAbi,
  functionName: 'redeem',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeTreasurer"`
 */
export const useWriteArgaDiamondChangeTreasurer =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: 'changeTreasurer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteArgaDiamondRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteArgaDiamondTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: argaDiamondAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__
 */
export const useSimulateArgaDiamond = /*#__PURE__*/ createUseSimulateContract({
  abi: argaDiamondAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 */
export const useSimulateArgaDiamondConcludeDeclarationWithApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'concludeDeclarationWithApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 */
export const useSimulateArgaDiamondConcludeDeclarationWithRejection =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'concludeDeclarationWithRejection',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"declareWithEther"`
 */
export const useSimulateArgaDiamondDeclareWithEther =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'declareWithEther',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"submitDeclarationProof"`
 */
export const useSimulateArgaDiamondSubmitDeclarationProof =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'submitDeclarationProof',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const useSimulateArgaDiamondEntropyCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeWinMultiplier"`
 */
export const useSimulateArgaDiamondChangeWinMultiplier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'changeWinMultiplier',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redeem"`
 */
export const useSimulateArgaDiamondRedeem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeTreasurer"`
 */
export const useSimulateArgaDiamondChangeTreasurer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'changeTreasurer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateArgaDiamondRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateArgaDiamondTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__
 */
export const useWatchArgaDiamondEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: argaDiamondAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"DeclarationMade"`
 */
export const useWatchArgaDiamondDeclarationMadeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'DeclarationMade',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"DeclarationStatusChange"`
 */
export const useWatchArgaDiamondDeclarationStatusChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'DeclarationStatusChange',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"PoolDrawn"`
 */
export const useWatchArgaDiamondPoolDrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'PoolDrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"TreasurerChanged"`
 */
export const useWatchArgaDiamondTreasurerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'TreasurerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchArgaDiamondOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__
 */
export const useWatchArgaLibraryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: argaLibraryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"DeclarationMade"`
 */
export const useWatchArgaLibraryDeclarationMadeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'DeclarationMade',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"DeclarationStatusChange"`
 */
export const useWatchArgaLibraryDeclarationStatusChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'DeclarationStatusChange',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"ParentContractChanged"`
 */
export const useWatchArgaLibraryParentContractChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'ParentContractChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"PoolDrawn"`
 */
export const useWatchArgaLibraryPoolDrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'PoolDrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"PoolWon"`
 */
export const useWatchArgaLibraryPoolWonEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'PoolWon',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"TreasurerChanged"`
 */
export const useWatchArgaLibraryTreasurerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'TreasurerChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link declarationFacetAbi}__
 */
export const useReadDeclarationFacet = /*#__PURE__*/ createUseReadContract({
  abi: declarationFacetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"actorDeclarations"`
 */
export const useReadDeclarationFacetActorDeclarations =
  /*#__PURE__*/ createUseReadContract({
    abi: declarationFacetAbi,
    functionName: 'actorDeclarations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"communityDeclarations"`
 */
export const useReadDeclarationFacetCommunityDeclarations =
  /*#__PURE__*/ createUseReadContract({
    abi: declarationFacetAbi,
    functionName: 'communityDeclarations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"getDeclaration"`
 */
export const useReadDeclarationFacetGetDeclaration =
  /*#__PURE__*/ createUseReadContract({
    abi: declarationFacetAbi,
    functionName: 'getDeclaration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"witnessDeclarations"`
 */
export const useReadDeclarationFacetWitnessDeclarations =
  /*#__PURE__*/ createUseReadContract({
    abi: declarationFacetAbi,
    functionName: 'witnessDeclarations',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link declarationFacetAbi}__
 */
export const useWriteDeclarationFacet = /*#__PURE__*/ createUseWriteContract({
  abi: declarationFacetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 */
export const useWriteDeclarationFacetConcludeDeclarationWithApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: declarationFacetAbi,
    functionName: 'concludeDeclarationWithApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 */
export const useWriteDeclarationFacetConcludeDeclarationWithRejection =
  /*#__PURE__*/ createUseWriteContract({
    abi: declarationFacetAbi,
    functionName: 'concludeDeclarationWithRejection',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"declareWithEther"`
 */
export const useWriteDeclarationFacetDeclareWithEther =
  /*#__PURE__*/ createUseWriteContract({
    abi: declarationFacetAbi,
    functionName: 'declareWithEther',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"submitDeclarationProof"`
 */
export const useWriteDeclarationFacetSubmitDeclarationProof =
  /*#__PURE__*/ createUseWriteContract({
    abi: declarationFacetAbi,
    functionName: 'submitDeclarationProof',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link declarationFacetAbi}__
 */
export const useSimulateDeclarationFacet =
  /*#__PURE__*/ createUseSimulateContract({ abi: declarationFacetAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 */
export const useSimulateDeclarationFacetConcludeDeclarationWithApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: declarationFacetAbi,
    functionName: 'concludeDeclarationWithApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 */
export const useSimulateDeclarationFacetConcludeDeclarationWithRejection =
  /*#__PURE__*/ createUseSimulateContract({
    abi: declarationFacetAbi,
    functionName: 'concludeDeclarationWithRejection',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"declareWithEther"`
 */
export const useSimulateDeclarationFacetDeclareWithEther =
  /*#__PURE__*/ createUseSimulateContract({
    abi: declarationFacetAbi,
    functionName: 'declareWithEther',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"submitDeclarationProof"`
 */
export const useSimulateDeclarationFacetSubmitDeclarationProof =
  /*#__PURE__*/ createUseSimulateContract({
    abi: declarationFacetAbi,
    functionName: 'submitDeclarationProof',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link declarationFacetAbi}__
 */
export const useWatchDeclarationFacetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: declarationFacetAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link declarationFacetAbi}__ and `eventName` set to `"DeclarationMade"`
 */
export const useWatchDeclarationFacetDeclarationMadeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: declarationFacetAbi,
    eventName: 'DeclarationMade',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link declarationFacetAbi}__ and `eventName` set to `"DeclarationStatusChange"`
 */
export const useWatchDeclarationFacetDeclarationStatusChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: declarationFacetAbi,
    eventName: 'DeclarationStatusChange',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link declarationFacetAbi}__ and `eventName` set to `"PoolDrawn"`
 */
export const useWatchDeclarationFacetPoolDrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: declarationFacetAbi,
    eventName: 'PoolDrawn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link diamondCutFacetAbi}__
 */
export const useWriteDiamondCutFacet = /*#__PURE__*/ createUseWriteContract({
  abi: diamondCutFacetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link diamondCutFacetAbi}__ and `functionName` set to `"diamondCut"`
 */
export const useWriteDiamondCutFacetDiamondCut =
  /*#__PURE__*/ createUseWriteContract({
    abi: diamondCutFacetAbi,
    functionName: 'diamondCut',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link diamondCutFacetAbi}__
 */
export const useSimulateDiamondCutFacet =
  /*#__PURE__*/ createUseSimulateContract({ abi: diamondCutFacetAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link diamondCutFacetAbi}__ and `functionName` set to `"diamondCut"`
 */
export const useSimulateDiamondCutFacetDiamondCut =
  /*#__PURE__*/ createUseSimulateContract({
    abi: diamondCutFacetAbi,
    functionName: 'diamondCut',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link diamondCutFacetAbi}__
 */
export const useWatchDiamondCutFacetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: diamondCutFacetAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link diamondCutFacetAbi}__ and `eventName` set to `"DiamondCut"`
 */
export const useWatchDiamondCutFacetDiamondCutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: diamondCutFacetAbi,
    eventName: 'DiamondCut',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link diamondInitAbi}__
 */
export const useReadDiamondInit = /*#__PURE__*/ createUseReadContract({
  abi: diamondInitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link diamondInitAbi}__ and `functionName` set to `"isContract"`
 */
export const useReadDiamondInitIsContract = /*#__PURE__*/ createUseReadContract(
  { abi: diamondInitAbi, functionName: 'isContract' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link diamondInitAbi}__
 */
export const useWriteDiamondInit = /*#__PURE__*/ createUseWriteContract({
  abi: diamondInitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link diamondInitAbi}__ and `functionName` set to `"init"`
 */
export const useWriteDiamondInitInit = /*#__PURE__*/ createUseWriteContract({
  abi: diamondInitAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link diamondInitAbi}__
 */
export const useSimulateDiamondInit = /*#__PURE__*/ createUseSimulateContract({
  abi: diamondInitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link diamondInitAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateDiamondInitInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: diamondInitAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__
 */
export const useReadDiamondLoupeFacet = /*#__PURE__*/ createUseReadContract({
  abi: diamondLoupeFacetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"facetAddress"`
 */
export const useReadDiamondLoupeFacetFacetAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'facetAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"facetAddresses"`
 */
export const useReadDiamondLoupeFacetFacetAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'facetAddresses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"facetFunctionSelectors"`
 */
export const useReadDiamondLoupeFacetFacetFunctionSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'facetFunctionSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"facets"`
 */
export const useReadDiamondLoupeFacetFacets =
  /*#__PURE__*/ createUseReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'facets',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadDiamondLoupeFacetSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__
 */
export const useReadEntropy = /*#__PURE__*/ createUseReadContract({
  abi: entropyAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"NUM_REQUESTS"`
 */
export const useReadEntropyNumRequests = /*#__PURE__*/ createUseReadContract({
  abi: entropyAbi,
  functionName: 'NUM_REQUESTS',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"NUM_REQUESTS_MASK"`
 */
export const useReadEntropyNumRequestsMask =
  /*#__PURE__*/ createUseReadContract({
    abi: entropyAbi,
    functionName: 'NUM_REQUESTS_MASK',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"combineRandomValues"`
 */
export const useReadEntropyCombineRandomValues =
  /*#__PURE__*/ createUseReadContract({
    abi: entropyAbi,
    functionName: 'combineRandomValues',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"constructUserCommitment"`
 */
export const useReadEntropyConstructUserCommitment =
  /*#__PURE__*/ createUseReadContract({
    abi: entropyAbi,
    functionName: 'constructUserCommitment',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getAccruedPythFees"`
 */
export const useReadEntropyGetAccruedPythFees =
  /*#__PURE__*/ createUseReadContract({
    abi: entropyAbi,
    functionName: 'getAccruedPythFees',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getDefaultProvider"`
 */
export const useReadEntropyGetDefaultProvider =
  /*#__PURE__*/ createUseReadContract({
    abi: entropyAbi,
    functionName: 'getDefaultProvider',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getFee"`
 */
export const useReadEntropyGetFee = /*#__PURE__*/ createUseReadContract({
  abi: entropyAbi,
  functionName: 'getFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getProviderInfo"`
 */
export const useReadEntropyGetProviderInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: entropyAbi,
    functionName: 'getProviderInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getPythFee"`
 */
export const useReadEntropyGetPythFee = /*#__PURE__*/ createUseReadContract({
  abi: entropyAbi,
  functionName: 'getPythFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getRequest"`
 */
export const useReadEntropyGetRequest = /*#__PURE__*/ createUseReadContract({
  abi: entropyAbi,
  functionName: 'getRequest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__
 */
export const useWriteEntropy = /*#__PURE__*/ createUseWriteContract({
  abi: entropyAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"register"`
 */
export const useWriteEntropyRegister = /*#__PURE__*/ createUseWriteContract({
  abi: entropyAbi,
  functionName: 'register',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"request"`
 */
export const useWriteEntropyRequest = /*#__PURE__*/ createUseWriteContract({
  abi: entropyAbi,
  functionName: 'request',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"requestWithCallback"`
 */
export const useWriteEntropyRequestWithCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: entropyAbi,
    functionName: 'requestWithCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"reveal"`
 */
export const useWriteEntropyReveal = /*#__PURE__*/ createUseWriteContract({
  abi: entropyAbi,
  functionName: 'reveal',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"revealWithCallback"`
 */
export const useWriteEntropyRevealWithCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: entropyAbi,
    functionName: 'revealWithCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const useWriteEntropySetFeeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: entropyAbi,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderFee"`
 */
export const useWriteEntropySetProviderFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: entropyAbi,
    functionName: 'setProviderFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderFeeAsFeeManager"`
 */
export const useWriteEntropySetProviderFeeAsFeeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: entropyAbi,
    functionName: 'setProviderFeeAsFeeManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderUri"`
 */
export const useWriteEntropySetProviderUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: entropyAbi,
    functionName: 'setProviderUri',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteEntropyWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: entropyAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"withdrawAsFeeManager"`
 */
export const useWriteEntropyWithdrawAsFeeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: entropyAbi,
    functionName: 'withdrawAsFeeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__
 */
export const useSimulateEntropy = /*#__PURE__*/ createUseSimulateContract({
  abi: entropyAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"register"`
 */
export const useSimulateEntropyRegister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'register',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"request"`
 */
export const useSimulateEntropyRequest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'request',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"requestWithCallback"`
 */
export const useSimulateEntropyRequestWithCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'requestWithCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"reveal"`
 */
export const useSimulateEntropyReveal = /*#__PURE__*/ createUseSimulateContract(
  { abi: entropyAbi, functionName: 'reveal' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"revealWithCallback"`
 */
export const useSimulateEntropyRevealWithCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'revealWithCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const useSimulateEntropySetFeeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderFee"`
 */
export const useSimulateEntropySetProviderFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'setProviderFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderFeeAsFeeManager"`
 */
export const useSimulateEntropySetProviderFeeAsFeeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'setProviderFeeAsFeeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderUri"`
 */
export const useSimulateEntropySetProviderUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'setProviderUri',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateEntropyWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"withdrawAsFeeManager"`
 */
export const useSimulateEntropyWithdrawAsFeeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: entropyAbi,
    functionName: 'withdrawAsFeeManager',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__
 */
export const useWatchEntropyEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: entropyAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"ProviderFeeManagerUpdated"`
 */
export const useWatchEntropyProviderFeeManagerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'ProviderFeeManagerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"ProviderFeeUpdated"`
 */
export const useWatchEntropyProviderFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'ProviderFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"ProviderUriUpdated"`
 */
export const useWatchEntropyProviderUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'ProviderUriUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"Registered"`
 */
export const useWatchEntropyRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'Registered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"Requested"`
 */
export const useWatchEntropyRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'Requested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"RequestedWithCallback"`
 */
export const useWatchEntropyRequestedWithCallbackEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'RequestedWithCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"Revealed"`
 */
export const useWatchEntropyRevealedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'Revealed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"RevealedWithCallback"`
 */
export const useWatchEntropyRevealedWithCallbackEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'RevealedWithCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchEntropyWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__
 */
export const useWatchEntropyEventsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: entropyEventsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"ProviderFeeManagerUpdated"`
 */
export const useWatchEntropyEventsProviderFeeManagerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'ProviderFeeManagerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"ProviderFeeUpdated"`
 */
export const useWatchEntropyEventsProviderFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'ProviderFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"ProviderUriUpdated"`
 */
export const useWatchEntropyEventsProviderUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'ProviderUriUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"Registered"`
 */
export const useWatchEntropyEventsRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'Registered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"Requested"`
 */
export const useWatchEntropyEventsRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'Requested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"RequestedWithCallback"`
 */
export const useWatchEntropyEventsRequestedWithCallbackEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'RequestedWithCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"Revealed"`
 */
export const useWatchEntropyEventsRevealedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'Revealed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"RevealedWithCallback"`
 */
export const useWatchEntropyEventsRevealedWithCallbackEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'RevealedWithCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchEntropyEventsWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyStateAbi}__
 */
export const useReadEntropyState = /*#__PURE__*/ createUseReadContract({
  abi: entropyStateAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyStateAbi}__ and `functionName` set to `"NUM_REQUESTS"`
 */
export const useReadEntropyStateNumRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: entropyStateAbi,
    functionName: 'NUM_REQUESTS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link entropyStateAbi}__ and `functionName` set to `"NUM_REQUESTS_MASK"`
 */
export const useReadEntropyStateNumRequestsMask =
  /*#__PURE__*/ createUseReadContract({
    abi: entropyStateAbi,
    functionName: 'NUM_REQUESTS_MASK',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iDiamondCutAbi}__
 */
export const useWriteIDiamondCut = /*#__PURE__*/ createUseWriteContract({
  abi: iDiamondCutAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iDiamondCutAbi}__ and `functionName` set to `"diamondCut"`
 */
export const useWriteIDiamondCutDiamondCut =
  /*#__PURE__*/ createUseWriteContract({
    abi: iDiamondCutAbi,
    functionName: 'diamondCut',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iDiamondCutAbi}__
 */
export const useSimulateIDiamondCut = /*#__PURE__*/ createUseSimulateContract({
  abi: iDiamondCutAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iDiamondCutAbi}__ and `functionName` set to `"diamondCut"`
 */
export const useSimulateIDiamondCutDiamondCut =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iDiamondCutAbi,
    functionName: 'diamondCut',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iDiamondCutAbi}__
 */
export const useWatchIDiamondCutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iDiamondCutAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iDiamondCutAbi}__ and `eventName` set to `"DiamondCut"`
 */
export const useWatchIDiamondCutDiamondCutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iDiamondCutAbi,
    eventName: 'DiamondCut',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__
 */
export const useReadIDiamondLoupe = /*#__PURE__*/ createUseReadContract({
  abi: iDiamondLoupeAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__ and `functionName` set to `"facetAddress"`
 */
export const useReadIDiamondLoupeFacetAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: iDiamondLoupeAbi,
    functionName: 'facetAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__ and `functionName` set to `"facetAddresses"`
 */
export const useReadIDiamondLoupeFacetAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: iDiamondLoupeAbi,
    functionName: 'facetAddresses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__ and `functionName` set to `"facetFunctionSelectors"`
 */
export const useReadIDiamondLoupeFacetFunctionSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: iDiamondLoupeAbi,
    functionName: 'facetFunctionSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__ and `functionName` set to `"facets"`
 */
export const useReadIDiamondLoupeFacets = /*#__PURE__*/ createUseReadContract({
  abi: iDiamondLoupeAbi,
  functionName: 'facets',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const useReadIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ierc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc173Abi}__
 */
export const useReadIerc173 = /*#__PURE__*/ createUseReadContract({
  abi: ierc173Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc173Abi}__ and `functionName` set to `"owner"`
 */
export const useReadIerc173Owner = /*#__PURE__*/ createUseReadContract({
  abi: ierc173Abi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc173Abi}__
 */
export const useWriteIerc173 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc173Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc173Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteIerc173TransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc173Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc173Abi}__
 */
export const useSimulateIerc173 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc173Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc173Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateIerc173TransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc173Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc173Abi}__
 */
export const useWatchIerc173Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc173Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc173Abi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchIerc173OwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc173Abi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEntropyAbi}__
 */
export const useReadIEntropy = /*#__PURE__*/ createUseReadContract({
  abi: iEntropyAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"combineRandomValues"`
 */
export const useReadIEntropyCombineRandomValues =
  /*#__PURE__*/ createUseReadContract({
    abi: iEntropyAbi,
    functionName: 'combineRandomValues',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"constructUserCommitment"`
 */
export const useReadIEntropyConstructUserCommitment =
  /*#__PURE__*/ createUseReadContract({
    abi: iEntropyAbi,
    functionName: 'constructUserCommitment',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getAccruedPythFees"`
 */
export const useReadIEntropyGetAccruedPythFees =
  /*#__PURE__*/ createUseReadContract({
    abi: iEntropyAbi,
    functionName: 'getAccruedPythFees',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getDefaultProvider"`
 */
export const useReadIEntropyGetDefaultProvider =
  /*#__PURE__*/ createUseReadContract({
    abi: iEntropyAbi,
    functionName: 'getDefaultProvider',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getFee"`
 */
export const useReadIEntropyGetFee = /*#__PURE__*/ createUseReadContract({
  abi: iEntropyAbi,
  functionName: 'getFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getProviderInfo"`
 */
export const useReadIEntropyGetProviderInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: iEntropyAbi,
    functionName: 'getProviderInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getRequest"`
 */
export const useReadIEntropyGetRequest = /*#__PURE__*/ createUseReadContract({
  abi: iEntropyAbi,
  functionName: 'getRequest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__
 */
export const useWriteIEntropy = /*#__PURE__*/ createUseWriteContract({
  abi: iEntropyAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"register"`
 */
export const useWriteIEntropyRegister = /*#__PURE__*/ createUseWriteContract({
  abi: iEntropyAbi,
  functionName: 'register',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"request"`
 */
export const useWriteIEntropyRequest = /*#__PURE__*/ createUseWriteContract({
  abi: iEntropyAbi,
  functionName: 'request',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"requestWithCallback"`
 */
export const useWriteIEntropyRequestWithCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEntropyAbi,
    functionName: 'requestWithCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"reveal"`
 */
export const useWriteIEntropyReveal = /*#__PURE__*/ createUseWriteContract({
  abi: iEntropyAbi,
  functionName: 'reveal',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"revealWithCallback"`
 */
export const useWriteIEntropyRevealWithCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEntropyAbi,
    functionName: 'revealWithCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const useWriteIEntropySetFeeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEntropyAbi,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderFee"`
 */
export const useWriteIEntropySetProviderFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEntropyAbi,
    functionName: 'setProviderFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderFeeAsFeeManager"`
 */
export const useWriteIEntropySetProviderFeeAsFeeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEntropyAbi,
    functionName: 'setProviderFeeAsFeeManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderUri"`
 */
export const useWriteIEntropySetProviderUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEntropyAbi,
    functionName: 'setProviderUri',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteIEntropyWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: iEntropyAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"withdrawAsFeeManager"`
 */
export const useWriteIEntropyWithdrawAsFeeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEntropyAbi,
    functionName: 'withdrawAsFeeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__
 */
export const useSimulateIEntropy = /*#__PURE__*/ createUseSimulateContract({
  abi: iEntropyAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"register"`
 */
export const useSimulateIEntropyRegister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'register',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"request"`
 */
export const useSimulateIEntropyRequest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'request',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"requestWithCallback"`
 */
export const useSimulateIEntropyRequestWithCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'requestWithCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"reveal"`
 */
export const useSimulateIEntropyReveal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'reveal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"revealWithCallback"`
 */
export const useSimulateIEntropyRevealWithCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'revealWithCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const useSimulateIEntropySetFeeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderFee"`
 */
export const useSimulateIEntropySetProviderFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'setProviderFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderFeeAsFeeManager"`
 */
export const useSimulateIEntropySetProviderFeeAsFeeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'setProviderFeeAsFeeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderUri"`
 */
export const useSimulateIEntropySetProviderUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'setProviderUri',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateIEntropyWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"withdrawAsFeeManager"`
 */
export const useSimulateIEntropyWithdrawAsFeeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyAbi,
    functionName: 'withdrawAsFeeManager',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__
 */
export const useWatchIEntropyEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iEntropyAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"ProviderFeeManagerUpdated"`
 */
export const useWatchIEntropyProviderFeeManagerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'ProviderFeeManagerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"ProviderFeeUpdated"`
 */
export const useWatchIEntropyProviderFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'ProviderFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"ProviderUriUpdated"`
 */
export const useWatchIEntropyProviderUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'ProviderUriUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"Registered"`
 */
export const useWatchIEntropyRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'Registered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"Requested"`
 */
export const useWatchIEntropyRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'Requested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"RequestedWithCallback"`
 */
export const useWatchIEntropyRequestedWithCallbackEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'RequestedWithCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"Revealed"`
 */
export const useWatchIEntropyRevealedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'Revealed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"RevealedWithCallback"`
 */
export const useWatchIEntropyRevealedWithCallbackEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'RevealedWithCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchIEntropyWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyConsumerAbi}__
 */
export const useWriteIEntropyConsumer = /*#__PURE__*/ createUseWriteContract({
  abi: iEntropyConsumerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEntropyConsumerAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const useWriteIEntropyConsumerEntropyCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEntropyConsumerAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyConsumerAbi}__
 */
export const useSimulateIEntropyConsumer =
  /*#__PURE__*/ createUseSimulateContract({ abi: iEntropyConsumerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEntropyConsumerAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const useSimulateIEntropyConsumerEntropyCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEntropyConsumerAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link libDiamondAbi}__
 */
export const useWatchLibDiamondEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: libDiamondAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link libDiamondAbi}__ and `eventName` set to `"DiamondCut"`
 */
export const useWatchLibDiamondDiamondCutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: libDiamondAbi,
    eventName: 'DiamondCut',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownershipFacetAbi}__
 */
export const useReadOwnershipFacet = /*#__PURE__*/ createUseReadContract({
  abi: ownershipFacetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnershipFacetOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownershipFacetAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownershipFacetAbi}__
 */
export const useWriteOwnershipFacet = /*#__PURE__*/ createUseWriteContract({
  abi: ownershipFacetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnershipFacetRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownershipFacetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnershipFacetTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownershipFacetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownershipFacetAbi}__
 */
export const useSimulateOwnershipFacet =
  /*#__PURE__*/ createUseSimulateContract({ abi: ownershipFacetAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnershipFacetRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownershipFacetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnershipFacetTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownershipFacetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownershipFacetAbi}__
 */
export const useWatchOwnershipFacetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ownershipFacetAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownershipFacetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnershipFacetOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownershipFacetAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolFacetAbi}__
 */
export const useReadPoolFacet = /*#__PURE__*/ createUseReadContract({
  abi: poolFacetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"draw"`
 */
export const useReadPoolFacetDraw = /*#__PURE__*/ createUseReadContract({
  abi: poolFacetAbi,
  functionName: 'draw',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"pool"`
 */
export const useReadPoolFacetPool = /*#__PURE__*/ createUseReadContract({
  abi: poolFacetAbi,
  functionName: 'pool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolFacetAbi}__
 */
export const useWritePoolFacet = /*#__PURE__*/ createUseWriteContract({
  abi: poolFacetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const useWritePoolFacetEntropyCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolFacetAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"changeWinMultiplier"`
 */
export const useWritePoolFacetChangeWinMultiplier =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolFacetAbi,
    functionName: 'changeWinMultiplier',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolFacetAbi}__
 */
export const useSimulatePoolFacet = /*#__PURE__*/ createUseSimulateContract({
  abi: poolFacetAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const useSimulatePoolFacetEntropyCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolFacetAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"changeWinMultiplier"`
 */
export const useSimulatePoolFacetChangeWinMultiplier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolFacetAbi,
    functionName: 'changeWinMultiplier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link redemptionFacetAbi}__
 */
export const useReadRedemptionFacet = /*#__PURE__*/ createUseReadContract({
  abi: redemptionFacetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link redemptionFacetAbi}__ and `functionName` set to `"redemptionsForParty"`
 */
export const useReadRedemptionFacetRedemptionsForParty =
  /*#__PURE__*/ createUseReadContract({
    abi: redemptionFacetAbi,
    functionName: 'redemptionsForParty',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link redemptionFacetAbi}__
 */
export const useWriteRedemptionFacet = /*#__PURE__*/ createUseWriteContract({
  abi: redemptionFacetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link redemptionFacetAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteRedemptionFacetRedeem =
  /*#__PURE__*/ createUseWriteContract({
    abi: redemptionFacetAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link redemptionFacetAbi}__
 */
export const useSimulateRedemptionFacet =
  /*#__PURE__*/ createUseSimulateContract({ abi: redemptionFacetAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link redemptionFacetAbi}__ and `functionName` set to `"redeem"`
 */
export const useSimulateRedemptionFacetRedeem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: redemptionFacetAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link treasuryFacetAbi}__
 */
export const useReadTreasuryFacet = /*#__PURE__*/ createUseReadContract({
  abi: treasuryFacetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link treasuryFacetAbi}__ and `functionName` set to `"treasurer"`
 */
export const useReadTreasuryFacetTreasurer =
  /*#__PURE__*/ createUseReadContract({
    abi: treasuryFacetAbi,
    functionName: 'treasurer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link treasuryFacetAbi}__
 */
export const useWriteTreasuryFacet = /*#__PURE__*/ createUseWriteContract({
  abi: treasuryFacetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link treasuryFacetAbi}__ and `functionName` set to `"changeTreasurer"`
 */
export const useWriteTreasuryFacetChangeTreasurer =
  /*#__PURE__*/ createUseWriteContract({
    abi: treasuryFacetAbi,
    functionName: 'changeTreasurer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link treasuryFacetAbi}__
 */
export const useSimulateTreasuryFacet = /*#__PURE__*/ createUseSimulateContract(
  { abi: treasuryFacetAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link treasuryFacetAbi}__ and `functionName` set to `"changeTreasurer"`
 */
export const useSimulateTreasuryFacetChangeTreasurer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: treasuryFacetAbi,
    functionName: 'changeTreasurer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link treasuryFacetAbi}__
 */
export const useWatchTreasuryFacetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: treasuryFacetAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link treasuryFacetAbi}__ and `eventName` set to `"TreasurerChanged"`
 */
export const useWatchTreasuryFacetTreasurerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: treasuryFacetAbi,
    eventName: 'TreasurerChanged',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const watchArgaEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: argaAbi,
  address: argaAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"DiamondCut"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const watchArgaDiamondCutEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: argaAbi,
  address: argaAddress,
  eventName: 'DiamondCut',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xa99FfE9000dF352d10D32F2E146F6bf612b4E5D2)
 */
export const watchArgaOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaAbi,
    address: argaAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__
 */
export const readArgaDiamond = /*#__PURE__*/ createReadContract({
  abi: argaDiamondAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"actorDeclarations"`
 */
export const readArgaDiamondActorDeclarations =
  /*#__PURE__*/ createReadContract({
    abi: argaDiamondAbi,
    functionName: 'actorDeclarations',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"communityDeclarations"`
 */
export const readArgaDiamondCommunityDeclarations =
  /*#__PURE__*/ createReadContract({
    abi: argaDiamondAbi,
    functionName: 'communityDeclarations',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"getDeclaration"`
 */
export const readArgaDiamondGetDeclaration = /*#__PURE__*/ createReadContract({
  abi: argaDiamondAbi,
  functionName: 'getDeclaration',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"witnessDeclarations"`
 */
export const readArgaDiamondWitnessDeclarations =
  /*#__PURE__*/ createReadContract({
    abi: argaDiamondAbi,
    functionName: 'witnessDeclarations',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"draw"`
 */
export const readArgaDiamondDraw = /*#__PURE__*/ createReadContract({
  abi: argaDiamondAbi,
  functionName: 'draw',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"pool"`
 */
export const readArgaDiamondPool = /*#__PURE__*/ createReadContract({
  abi: argaDiamondAbi,
  functionName: 'pool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redemptionsForParty"`
 */
export const readArgaDiamondRedemptionsForParty =
  /*#__PURE__*/ createReadContract({
    abi: argaDiamondAbi,
    functionName: 'redemptionsForParty',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"treasurer"`
 */
export const readArgaDiamondTreasurer = /*#__PURE__*/ createReadContract({
  abi: argaDiamondAbi,
  functionName: 'treasurer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"owner"`
 */
export const readArgaDiamondOwner = /*#__PURE__*/ createReadContract({
  abi: argaDiamondAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__
 */
export const writeArgaDiamond = /*#__PURE__*/ createWriteContract({
  abi: argaDiamondAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 */
export const writeArgaDiamondConcludeDeclarationWithApproval =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: 'concludeDeclarationWithApproval',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 */
export const writeArgaDiamondConcludeDeclarationWithRejection =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: 'concludeDeclarationWithRejection',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"declareWithEther"`
 */
export const writeArgaDiamondDeclareWithEther =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: 'declareWithEther',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"submitDeclarationProof"`
 */
export const writeArgaDiamondSubmitDeclarationProof =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: 'submitDeclarationProof',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const writeArgaDiamondEntropyCallback =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeWinMultiplier"`
 */
export const writeArgaDiamondChangeWinMultiplier =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: 'changeWinMultiplier',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redeem"`
 */
export const writeArgaDiamondRedeem = /*#__PURE__*/ createWriteContract({
  abi: argaDiamondAbi,
  functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeTreasurer"`
 */
export const writeArgaDiamondChangeTreasurer =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: 'changeTreasurer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeArgaDiamondRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeArgaDiamondTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: argaDiamondAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__
 */
export const simulateArgaDiamond = /*#__PURE__*/ createSimulateContract({
  abi: argaDiamondAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 */
export const simulateArgaDiamondConcludeDeclarationWithApproval =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'concludeDeclarationWithApproval',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 */
export const simulateArgaDiamondConcludeDeclarationWithRejection =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'concludeDeclarationWithRejection',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"declareWithEther"`
 */
export const simulateArgaDiamondDeclareWithEther =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'declareWithEther',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"submitDeclarationProof"`
 */
export const simulateArgaDiamondSubmitDeclarationProof =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'submitDeclarationProof',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const simulateArgaDiamondEntropyCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeWinMultiplier"`
 */
export const simulateArgaDiamondChangeWinMultiplier =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'changeWinMultiplier',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateArgaDiamondRedeem = /*#__PURE__*/ createSimulateContract({
  abi: argaDiamondAbi,
  functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"changeTreasurer"`
 */
export const simulateArgaDiamondChangeTreasurer =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'changeTreasurer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateArgaDiamondRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link argaDiamondAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateArgaDiamondTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: argaDiamondAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__
 */
export const watchArgaDiamondEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: argaDiamondAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"DeclarationMade"`
 */
export const watchArgaDiamondDeclarationMadeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'DeclarationMade',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"DeclarationStatusChange"`
 */
export const watchArgaDiamondDeclarationStatusChangeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'DeclarationStatusChange',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"PoolDrawn"`
 */
export const watchArgaDiamondPoolDrawnEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'PoolDrawn',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"TreasurerChanged"`
 */
export const watchArgaDiamondTreasurerChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'TreasurerChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaDiamondAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchArgaDiamondOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaDiamondAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__
 */
export const watchArgaLibraryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: argaLibraryAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"DeclarationMade"`
 */
export const watchArgaLibraryDeclarationMadeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'DeclarationMade',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"DeclarationStatusChange"`
 */
export const watchArgaLibraryDeclarationStatusChangeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'DeclarationStatusChange',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"ParentContractChanged"`
 */
export const watchArgaLibraryParentContractChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'ParentContractChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"PoolDrawn"`
 */
export const watchArgaLibraryPoolDrawnEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'PoolDrawn',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"PoolWon"`
 */
export const watchArgaLibraryPoolWonEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'PoolWon',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link argaLibraryAbi}__ and `eventName` set to `"TreasurerChanged"`
 */
export const watchArgaLibraryTreasurerChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: argaLibraryAbi,
    eventName: 'TreasurerChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link declarationFacetAbi}__
 */
export const readDeclarationFacet = /*#__PURE__*/ createReadContract({
  abi: declarationFacetAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"actorDeclarations"`
 */
export const readDeclarationFacetActorDeclarations =
  /*#__PURE__*/ createReadContract({
    abi: declarationFacetAbi,
    functionName: 'actorDeclarations',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"communityDeclarations"`
 */
export const readDeclarationFacetCommunityDeclarations =
  /*#__PURE__*/ createReadContract({
    abi: declarationFacetAbi,
    functionName: 'communityDeclarations',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"getDeclaration"`
 */
export const readDeclarationFacetGetDeclaration =
  /*#__PURE__*/ createReadContract({
    abi: declarationFacetAbi,
    functionName: 'getDeclaration',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"witnessDeclarations"`
 */
export const readDeclarationFacetWitnessDeclarations =
  /*#__PURE__*/ createReadContract({
    abi: declarationFacetAbi,
    functionName: 'witnessDeclarations',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link declarationFacetAbi}__
 */
export const writeDeclarationFacet = /*#__PURE__*/ createWriteContract({
  abi: declarationFacetAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 */
export const writeDeclarationFacetConcludeDeclarationWithApproval =
  /*#__PURE__*/ createWriteContract({
    abi: declarationFacetAbi,
    functionName: 'concludeDeclarationWithApproval',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 */
export const writeDeclarationFacetConcludeDeclarationWithRejection =
  /*#__PURE__*/ createWriteContract({
    abi: declarationFacetAbi,
    functionName: 'concludeDeclarationWithRejection',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"declareWithEther"`
 */
export const writeDeclarationFacetDeclareWithEther =
  /*#__PURE__*/ createWriteContract({
    abi: declarationFacetAbi,
    functionName: 'declareWithEther',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"submitDeclarationProof"`
 */
export const writeDeclarationFacetSubmitDeclarationProof =
  /*#__PURE__*/ createWriteContract({
    abi: declarationFacetAbi,
    functionName: 'submitDeclarationProof',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link declarationFacetAbi}__
 */
export const simulateDeclarationFacet = /*#__PURE__*/ createSimulateContract({
  abi: declarationFacetAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"concludeDeclarationWithApproval"`
 */
export const simulateDeclarationFacetConcludeDeclarationWithApproval =
  /*#__PURE__*/ createSimulateContract({
    abi: declarationFacetAbi,
    functionName: 'concludeDeclarationWithApproval',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"concludeDeclarationWithRejection"`
 */
export const simulateDeclarationFacetConcludeDeclarationWithRejection =
  /*#__PURE__*/ createSimulateContract({
    abi: declarationFacetAbi,
    functionName: 'concludeDeclarationWithRejection',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"declareWithEther"`
 */
export const simulateDeclarationFacetDeclareWithEther =
  /*#__PURE__*/ createSimulateContract({
    abi: declarationFacetAbi,
    functionName: 'declareWithEther',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link declarationFacetAbi}__ and `functionName` set to `"submitDeclarationProof"`
 */
export const simulateDeclarationFacetSubmitDeclarationProof =
  /*#__PURE__*/ createSimulateContract({
    abi: declarationFacetAbi,
    functionName: 'submitDeclarationProof',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link declarationFacetAbi}__
 */
export const watchDeclarationFacetEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: declarationFacetAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link declarationFacetAbi}__ and `eventName` set to `"DeclarationMade"`
 */
export const watchDeclarationFacetDeclarationMadeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: declarationFacetAbi,
    eventName: 'DeclarationMade',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link declarationFacetAbi}__ and `eventName` set to `"DeclarationStatusChange"`
 */
export const watchDeclarationFacetDeclarationStatusChangeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: declarationFacetAbi,
    eventName: 'DeclarationStatusChange',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link declarationFacetAbi}__ and `eventName` set to `"PoolDrawn"`
 */
export const watchDeclarationFacetPoolDrawnEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: declarationFacetAbi,
    eventName: 'PoolDrawn',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link diamondCutFacetAbi}__
 */
export const writeDiamondCutFacet = /*#__PURE__*/ createWriteContract({
  abi: diamondCutFacetAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link diamondCutFacetAbi}__ and `functionName` set to `"diamondCut"`
 */
export const writeDiamondCutFacetDiamondCut = /*#__PURE__*/ createWriteContract(
  { abi: diamondCutFacetAbi, functionName: 'diamondCut' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link diamondCutFacetAbi}__
 */
export const simulateDiamondCutFacet = /*#__PURE__*/ createSimulateContract({
  abi: diamondCutFacetAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link diamondCutFacetAbi}__ and `functionName` set to `"diamondCut"`
 */
export const simulateDiamondCutFacetDiamondCut =
  /*#__PURE__*/ createSimulateContract({
    abi: diamondCutFacetAbi,
    functionName: 'diamondCut',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link diamondCutFacetAbi}__
 */
export const watchDiamondCutFacetEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: diamondCutFacetAbi },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link diamondCutFacetAbi}__ and `eventName` set to `"DiamondCut"`
 */
export const watchDiamondCutFacetDiamondCutEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: diamondCutFacetAbi,
    eventName: 'DiamondCut',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link diamondInitAbi}__
 */
export const readDiamondInit = /*#__PURE__*/ createReadContract({
  abi: diamondInitAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link diamondInitAbi}__ and `functionName` set to `"isContract"`
 */
export const readDiamondInitIsContract = /*#__PURE__*/ createReadContract({
  abi: diamondInitAbi,
  functionName: 'isContract',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link diamondInitAbi}__
 */
export const writeDiamondInit = /*#__PURE__*/ createWriteContract({
  abi: diamondInitAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link diamondInitAbi}__ and `functionName` set to `"init"`
 */
export const writeDiamondInitInit = /*#__PURE__*/ createWriteContract({
  abi: diamondInitAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link diamondInitAbi}__
 */
export const simulateDiamondInit = /*#__PURE__*/ createSimulateContract({
  abi: diamondInitAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link diamondInitAbi}__ and `functionName` set to `"init"`
 */
export const simulateDiamondInitInit = /*#__PURE__*/ createSimulateContract({
  abi: diamondInitAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__
 */
export const readDiamondLoupeFacet = /*#__PURE__*/ createReadContract({
  abi: diamondLoupeFacetAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"facetAddress"`
 */
export const readDiamondLoupeFacetFacetAddress =
  /*#__PURE__*/ createReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'facetAddress',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"facetAddresses"`
 */
export const readDiamondLoupeFacetFacetAddresses =
  /*#__PURE__*/ createReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'facetAddresses',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"facetFunctionSelectors"`
 */
export const readDiamondLoupeFacetFacetFunctionSelectors =
  /*#__PURE__*/ createReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'facetFunctionSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"facets"`
 */
export const readDiamondLoupeFacetFacets = /*#__PURE__*/ createReadContract({
  abi: diamondLoupeFacetAbi,
  functionName: 'facets',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link diamondLoupeFacetAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readDiamondLoupeFacetSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: diamondLoupeFacetAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__
 */
export const readEntropy = /*#__PURE__*/ createReadContract({ abi: entropyAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"NUM_REQUESTS"`
 */
export const readEntropyNumRequests = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'NUM_REQUESTS',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"NUM_REQUESTS_MASK"`
 */
export const readEntropyNumRequestsMask = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'NUM_REQUESTS_MASK',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"combineRandomValues"`
 */
export const readEntropyCombineRandomValues = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'combineRandomValues',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"constructUserCommitment"`
 */
export const readEntropyConstructUserCommitment =
  /*#__PURE__*/ createReadContract({
    abi: entropyAbi,
    functionName: 'constructUserCommitment',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getAccruedPythFees"`
 */
export const readEntropyGetAccruedPythFees = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'getAccruedPythFees',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getDefaultProvider"`
 */
export const readEntropyGetDefaultProvider = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'getDefaultProvider',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getFee"`
 */
export const readEntropyGetFee = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'getFee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getProviderInfo"`
 */
export const readEntropyGetProviderInfo = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'getProviderInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getPythFee"`
 */
export const readEntropyGetPythFee = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'getPythFee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"getRequest"`
 */
export const readEntropyGetRequest = /*#__PURE__*/ createReadContract({
  abi: entropyAbi,
  functionName: 'getRequest',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__
 */
export const writeEntropy = /*#__PURE__*/ createWriteContract({
  abi: entropyAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"register"`
 */
export const writeEntropyRegister = /*#__PURE__*/ createWriteContract({
  abi: entropyAbi,
  functionName: 'register',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"request"`
 */
export const writeEntropyRequest = /*#__PURE__*/ createWriteContract({
  abi: entropyAbi,
  functionName: 'request',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"requestWithCallback"`
 */
export const writeEntropyRequestWithCallback =
  /*#__PURE__*/ createWriteContract({
    abi: entropyAbi,
    functionName: 'requestWithCallback',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"reveal"`
 */
export const writeEntropyReveal = /*#__PURE__*/ createWriteContract({
  abi: entropyAbi,
  functionName: 'reveal',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"revealWithCallback"`
 */
export const writeEntropyRevealWithCallback = /*#__PURE__*/ createWriteContract(
  { abi: entropyAbi, functionName: 'revealWithCallback' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const writeEntropySetFeeManager = /*#__PURE__*/ createWriteContract({
  abi: entropyAbi,
  functionName: 'setFeeManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderFee"`
 */
export const writeEntropySetProviderFee = /*#__PURE__*/ createWriteContract({
  abi: entropyAbi,
  functionName: 'setProviderFee',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderFeeAsFeeManager"`
 */
export const writeEntropySetProviderFeeAsFeeManager =
  /*#__PURE__*/ createWriteContract({
    abi: entropyAbi,
    functionName: 'setProviderFeeAsFeeManager',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderUri"`
 */
export const writeEntropySetProviderUri = /*#__PURE__*/ createWriteContract({
  abi: entropyAbi,
  functionName: 'setProviderUri',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeEntropyWithdraw = /*#__PURE__*/ createWriteContract({
  abi: entropyAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"withdrawAsFeeManager"`
 */
export const writeEntropyWithdrawAsFeeManager =
  /*#__PURE__*/ createWriteContract({
    abi: entropyAbi,
    functionName: 'withdrawAsFeeManager',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__
 */
export const simulateEntropy = /*#__PURE__*/ createSimulateContract({
  abi: entropyAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"register"`
 */
export const simulateEntropyRegister = /*#__PURE__*/ createSimulateContract({
  abi: entropyAbi,
  functionName: 'register',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"request"`
 */
export const simulateEntropyRequest = /*#__PURE__*/ createSimulateContract({
  abi: entropyAbi,
  functionName: 'request',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"requestWithCallback"`
 */
export const simulateEntropyRequestWithCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: entropyAbi,
    functionName: 'requestWithCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"reveal"`
 */
export const simulateEntropyReveal = /*#__PURE__*/ createSimulateContract({
  abi: entropyAbi,
  functionName: 'reveal',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"revealWithCallback"`
 */
export const simulateEntropyRevealWithCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: entropyAbi,
    functionName: 'revealWithCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const simulateEntropySetFeeManager =
  /*#__PURE__*/ createSimulateContract({
    abi: entropyAbi,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderFee"`
 */
export const simulateEntropySetProviderFee =
  /*#__PURE__*/ createSimulateContract({
    abi: entropyAbi,
    functionName: 'setProviderFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderFeeAsFeeManager"`
 */
export const simulateEntropySetProviderFeeAsFeeManager =
  /*#__PURE__*/ createSimulateContract({
    abi: entropyAbi,
    functionName: 'setProviderFeeAsFeeManager',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"setProviderUri"`
 */
export const simulateEntropySetProviderUri =
  /*#__PURE__*/ createSimulateContract({
    abi: entropyAbi,
    functionName: 'setProviderUri',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateEntropyWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: entropyAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link entropyAbi}__ and `functionName` set to `"withdrawAsFeeManager"`
 */
export const simulateEntropyWithdrawAsFeeManager =
  /*#__PURE__*/ createSimulateContract({
    abi: entropyAbi,
    functionName: 'withdrawAsFeeManager',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__
 */
export const watchEntropyEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: entropyAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"ProviderFeeManagerUpdated"`
 */
export const watchEntropyProviderFeeManagerUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyAbi,
    eventName: 'ProviderFeeManagerUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"ProviderFeeUpdated"`
 */
export const watchEntropyProviderFeeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyAbi,
    eventName: 'ProviderFeeUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"ProviderUriUpdated"`
 */
export const watchEntropyProviderUriUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyAbi,
    eventName: 'ProviderUriUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"Registered"`
 */
export const watchEntropyRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyAbi,
    eventName: 'Registered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"Requested"`
 */
export const watchEntropyRequestedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyAbi,
    eventName: 'Requested',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"RequestedWithCallback"`
 */
export const watchEntropyRequestedWithCallbackEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyAbi,
    eventName: 'RequestedWithCallback',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"Revealed"`
 */
export const watchEntropyRevealedEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: entropyAbi, eventName: 'Revealed' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"RevealedWithCallback"`
 */
export const watchEntropyRevealedWithCallbackEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyAbi,
    eventName: 'RevealedWithCallback',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const watchEntropyWithdrawalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__
 */
export const watchEntropyEventsEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: entropyEventsAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"ProviderFeeManagerUpdated"`
 */
export const watchEntropyEventsProviderFeeManagerUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'ProviderFeeManagerUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"ProviderFeeUpdated"`
 */
export const watchEntropyEventsProviderFeeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'ProviderFeeUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"ProviderUriUpdated"`
 */
export const watchEntropyEventsProviderUriUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'ProviderUriUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"Registered"`
 */
export const watchEntropyEventsRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'Registered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"Requested"`
 */
export const watchEntropyEventsRequestedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'Requested',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"RequestedWithCallback"`
 */
export const watchEntropyEventsRequestedWithCallbackEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'RequestedWithCallback',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"Revealed"`
 */
export const watchEntropyEventsRevealedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'Revealed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"RevealedWithCallback"`
 */
export const watchEntropyEventsRevealedWithCallbackEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'RevealedWithCallback',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link entropyEventsAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const watchEntropyEventsWithdrawalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: entropyEventsAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyStateAbi}__
 */
export const readEntropyState = /*#__PURE__*/ createReadContract({
  abi: entropyStateAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyStateAbi}__ and `functionName` set to `"NUM_REQUESTS"`
 */
export const readEntropyStateNumRequests = /*#__PURE__*/ createReadContract({
  abi: entropyStateAbi,
  functionName: 'NUM_REQUESTS',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link entropyStateAbi}__ and `functionName` set to `"NUM_REQUESTS_MASK"`
 */
export const readEntropyStateNumRequestsMask = /*#__PURE__*/ createReadContract(
  { abi: entropyStateAbi, functionName: 'NUM_REQUESTS_MASK' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iDiamondCutAbi}__
 */
export const writeIDiamondCut = /*#__PURE__*/ createWriteContract({
  abi: iDiamondCutAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iDiamondCutAbi}__ and `functionName` set to `"diamondCut"`
 */
export const writeIDiamondCutDiamondCut = /*#__PURE__*/ createWriteContract({
  abi: iDiamondCutAbi,
  functionName: 'diamondCut',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iDiamondCutAbi}__
 */
export const simulateIDiamondCut = /*#__PURE__*/ createSimulateContract({
  abi: iDiamondCutAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iDiamondCutAbi}__ and `functionName` set to `"diamondCut"`
 */
export const simulateIDiamondCutDiamondCut =
  /*#__PURE__*/ createSimulateContract({
    abi: iDiamondCutAbi,
    functionName: 'diamondCut',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iDiamondCutAbi}__
 */
export const watchIDiamondCutEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iDiamondCutAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iDiamondCutAbi}__ and `eventName` set to `"DiamondCut"`
 */
export const watchIDiamondCutDiamondCutEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iDiamondCutAbi,
    eventName: 'DiamondCut',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__
 */
export const readIDiamondLoupe = /*#__PURE__*/ createReadContract({
  abi: iDiamondLoupeAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__ and `functionName` set to `"facetAddress"`
 */
export const readIDiamondLoupeFacetAddress = /*#__PURE__*/ createReadContract({
  abi: iDiamondLoupeAbi,
  functionName: 'facetAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__ and `functionName` set to `"facetAddresses"`
 */
export const readIDiamondLoupeFacetAddresses = /*#__PURE__*/ createReadContract(
  { abi: iDiamondLoupeAbi, functionName: 'facetAddresses' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__ and `functionName` set to `"facetFunctionSelectors"`
 */
export const readIDiamondLoupeFacetFunctionSelectors =
  /*#__PURE__*/ createReadContract({
    abi: iDiamondLoupeAbi,
    functionName: 'facetFunctionSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iDiamondLoupeAbi}__ and `functionName` set to `"facets"`
 */
export const readIDiamondLoupeFacets = /*#__PURE__*/ createReadContract({
  abi: iDiamondLoupeAbi,
  functionName: 'facets',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const readIerc165 = /*#__PURE__*/ createReadContract({ abi: ierc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc173Abi}__
 */
export const readIerc173 = /*#__PURE__*/ createReadContract({ abi: ierc173Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc173Abi}__ and `functionName` set to `"owner"`
 */
export const readIerc173Owner = /*#__PURE__*/ createReadContract({
  abi: ierc173Abi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc173Abi}__
 */
export const writeIerc173 = /*#__PURE__*/ createWriteContract({
  abi: ierc173Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc173Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeIerc173TransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ierc173Abi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc173Abi}__
 */
export const simulateIerc173 = /*#__PURE__*/ createSimulateContract({
  abi: ierc173Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc173Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateIerc173TransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc173Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc173Abi}__
 */
export const watchIerc173Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc173Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc173Abi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchIerc173OwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc173Abi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iEntropyAbi}__
 */
export const readIEntropy = /*#__PURE__*/ createReadContract({
  abi: iEntropyAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"combineRandomValues"`
 */
export const readIEntropyCombineRandomValues = /*#__PURE__*/ createReadContract(
  { abi: iEntropyAbi, functionName: 'combineRandomValues' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"constructUserCommitment"`
 */
export const readIEntropyConstructUserCommitment =
  /*#__PURE__*/ createReadContract({
    abi: iEntropyAbi,
    functionName: 'constructUserCommitment',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getAccruedPythFees"`
 */
export const readIEntropyGetAccruedPythFees = /*#__PURE__*/ createReadContract({
  abi: iEntropyAbi,
  functionName: 'getAccruedPythFees',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getDefaultProvider"`
 */
export const readIEntropyGetDefaultProvider = /*#__PURE__*/ createReadContract({
  abi: iEntropyAbi,
  functionName: 'getDefaultProvider',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getFee"`
 */
export const readIEntropyGetFee = /*#__PURE__*/ createReadContract({
  abi: iEntropyAbi,
  functionName: 'getFee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getProviderInfo"`
 */
export const readIEntropyGetProviderInfo = /*#__PURE__*/ createReadContract({
  abi: iEntropyAbi,
  functionName: 'getProviderInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"getRequest"`
 */
export const readIEntropyGetRequest = /*#__PURE__*/ createReadContract({
  abi: iEntropyAbi,
  functionName: 'getRequest',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__
 */
export const writeIEntropy = /*#__PURE__*/ createWriteContract({
  abi: iEntropyAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"register"`
 */
export const writeIEntropyRegister = /*#__PURE__*/ createWriteContract({
  abi: iEntropyAbi,
  functionName: 'register',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"request"`
 */
export const writeIEntropyRequest = /*#__PURE__*/ createWriteContract({
  abi: iEntropyAbi,
  functionName: 'request',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"requestWithCallback"`
 */
export const writeIEntropyRequestWithCallback =
  /*#__PURE__*/ createWriteContract({
    abi: iEntropyAbi,
    functionName: 'requestWithCallback',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"reveal"`
 */
export const writeIEntropyReveal = /*#__PURE__*/ createWriteContract({
  abi: iEntropyAbi,
  functionName: 'reveal',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"revealWithCallback"`
 */
export const writeIEntropyRevealWithCallback =
  /*#__PURE__*/ createWriteContract({
    abi: iEntropyAbi,
    functionName: 'revealWithCallback',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const writeIEntropySetFeeManager = /*#__PURE__*/ createWriteContract({
  abi: iEntropyAbi,
  functionName: 'setFeeManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderFee"`
 */
export const writeIEntropySetProviderFee = /*#__PURE__*/ createWriteContract({
  abi: iEntropyAbi,
  functionName: 'setProviderFee',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderFeeAsFeeManager"`
 */
export const writeIEntropySetProviderFeeAsFeeManager =
  /*#__PURE__*/ createWriteContract({
    abi: iEntropyAbi,
    functionName: 'setProviderFeeAsFeeManager',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderUri"`
 */
export const writeIEntropySetProviderUri = /*#__PURE__*/ createWriteContract({
  abi: iEntropyAbi,
  functionName: 'setProviderUri',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeIEntropyWithdraw = /*#__PURE__*/ createWriteContract({
  abi: iEntropyAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"withdrawAsFeeManager"`
 */
export const writeIEntropyWithdrawAsFeeManager =
  /*#__PURE__*/ createWriteContract({
    abi: iEntropyAbi,
    functionName: 'withdrawAsFeeManager',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__
 */
export const simulateIEntropy = /*#__PURE__*/ createSimulateContract({
  abi: iEntropyAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"register"`
 */
export const simulateIEntropyRegister = /*#__PURE__*/ createSimulateContract({
  abi: iEntropyAbi,
  functionName: 'register',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"request"`
 */
export const simulateIEntropyRequest = /*#__PURE__*/ createSimulateContract({
  abi: iEntropyAbi,
  functionName: 'request',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"requestWithCallback"`
 */
export const simulateIEntropyRequestWithCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: iEntropyAbi,
    functionName: 'requestWithCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"reveal"`
 */
export const simulateIEntropyReveal = /*#__PURE__*/ createSimulateContract({
  abi: iEntropyAbi,
  functionName: 'reveal',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"revealWithCallback"`
 */
export const simulateIEntropyRevealWithCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: iEntropyAbi,
    functionName: 'revealWithCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const simulateIEntropySetFeeManager =
  /*#__PURE__*/ createSimulateContract({
    abi: iEntropyAbi,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderFee"`
 */
export const simulateIEntropySetProviderFee =
  /*#__PURE__*/ createSimulateContract({
    abi: iEntropyAbi,
    functionName: 'setProviderFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderFeeAsFeeManager"`
 */
export const simulateIEntropySetProviderFeeAsFeeManager =
  /*#__PURE__*/ createSimulateContract({
    abi: iEntropyAbi,
    functionName: 'setProviderFeeAsFeeManager',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"setProviderUri"`
 */
export const simulateIEntropySetProviderUri =
  /*#__PURE__*/ createSimulateContract({
    abi: iEntropyAbi,
    functionName: 'setProviderUri',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateIEntropyWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: iEntropyAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyAbi}__ and `functionName` set to `"withdrawAsFeeManager"`
 */
export const simulateIEntropyWithdrawAsFeeManager =
  /*#__PURE__*/ createSimulateContract({
    abi: iEntropyAbi,
    functionName: 'withdrawAsFeeManager',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__
 */
export const watchIEntropyEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iEntropyAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"ProviderFeeManagerUpdated"`
 */
export const watchIEntropyProviderFeeManagerUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'ProviderFeeManagerUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"ProviderFeeUpdated"`
 */
export const watchIEntropyProviderFeeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'ProviderFeeUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"ProviderUriUpdated"`
 */
export const watchIEntropyProviderUriUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'ProviderUriUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"Registered"`
 */
export const watchIEntropyRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'Registered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"Requested"`
 */
export const watchIEntropyRequestedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'Requested',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"RequestedWithCallback"`
 */
export const watchIEntropyRequestedWithCallbackEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'RequestedWithCallback',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"Revealed"`
 */
export const watchIEntropyRevealedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'Revealed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"RevealedWithCallback"`
 */
export const watchIEntropyRevealedWithCallbackEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'RevealedWithCallback',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iEntropyAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const watchIEntropyWithdrawalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iEntropyAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyConsumerAbi}__
 */
export const writeIEntropyConsumer = /*#__PURE__*/ createWriteContract({
  abi: iEntropyConsumerAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iEntropyConsumerAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const writeIEntropyConsumerEntropyCallback =
  /*#__PURE__*/ createWriteContract({
    abi: iEntropyConsumerAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyConsumerAbi}__
 */
export const simulateIEntropyConsumer = /*#__PURE__*/ createSimulateContract({
  abi: iEntropyConsumerAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iEntropyConsumerAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const simulateIEntropyConsumerEntropyCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: iEntropyConsumerAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link libDiamondAbi}__
 */
export const watchLibDiamondEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: libDiamondAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link libDiamondAbi}__ and `eventName` set to `"DiamondCut"`
 */
export const watchLibDiamondDiamondCutEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: libDiamondAbi,
    eventName: 'DiamondCut',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownershipFacetAbi}__
 */
export const readOwnershipFacet = /*#__PURE__*/ createReadContract({
  abi: ownershipFacetAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnershipFacetOwner = /*#__PURE__*/ createReadContract({
  abi: ownershipFacetAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownershipFacetAbi}__
 */
export const writeOwnershipFacet = /*#__PURE__*/ createWriteContract({
  abi: ownershipFacetAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnershipFacetRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: ownershipFacetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnershipFacetTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: ownershipFacetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownershipFacetAbi}__
 */
export const simulateOwnershipFacet = /*#__PURE__*/ createSimulateContract({
  abi: ownershipFacetAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnershipFacetRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownershipFacetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownershipFacetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnershipFacetTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownershipFacetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownershipFacetAbi}__
 */
export const watchOwnershipFacetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownershipFacetAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownershipFacetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnershipFacetOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ownershipFacetAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolFacetAbi}__
 */
export const readPoolFacet = /*#__PURE__*/ createReadContract({
  abi: poolFacetAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"draw"`
 */
export const readPoolFacetDraw = /*#__PURE__*/ createReadContract({
  abi: poolFacetAbi,
  functionName: 'draw',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"pool"`
 */
export const readPoolFacetPool = /*#__PURE__*/ createReadContract({
  abi: poolFacetAbi,
  functionName: 'pool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolFacetAbi}__
 */
export const writePoolFacet = /*#__PURE__*/ createWriteContract({
  abi: poolFacetAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const writePoolFacetEntropyCallback = /*#__PURE__*/ createWriteContract({
  abi: poolFacetAbi,
  functionName: '_entropyCallback',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"changeWinMultiplier"`
 */
export const writePoolFacetChangeWinMultiplier =
  /*#__PURE__*/ createWriteContract({
    abi: poolFacetAbi,
    functionName: 'changeWinMultiplier',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolFacetAbi}__
 */
export const simulatePoolFacet = /*#__PURE__*/ createSimulateContract({
  abi: poolFacetAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"_entropyCallback"`
 */
export const simulatePoolFacetEntropyCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: poolFacetAbi,
    functionName: '_entropyCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolFacetAbi}__ and `functionName` set to `"changeWinMultiplier"`
 */
export const simulatePoolFacetChangeWinMultiplier =
  /*#__PURE__*/ createSimulateContract({
    abi: poolFacetAbi,
    functionName: 'changeWinMultiplier',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link redemptionFacetAbi}__
 */
export const readRedemptionFacet = /*#__PURE__*/ createReadContract({
  abi: redemptionFacetAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link redemptionFacetAbi}__ and `functionName` set to `"redemptionsForParty"`
 */
export const readRedemptionFacetRedemptionsForParty =
  /*#__PURE__*/ createReadContract({
    abi: redemptionFacetAbi,
    functionName: 'redemptionsForParty',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link redemptionFacetAbi}__
 */
export const writeRedemptionFacet = /*#__PURE__*/ createWriteContract({
  abi: redemptionFacetAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link redemptionFacetAbi}__ and `functionName` set to `"redeem"`
 */
export const writeRedemptionFacetRedeem = /*#__PURE__*/ createWriteContract({
  abi: redemptionFacetAbi,
  functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link redemptionFacetAbi}__
 */
export const simulateRedemptionFacet = /*#__PURE__*/ createSimulateContract({
  abi: redemptionFacetAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link redemptionFacetAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateRedemptionFacetRedeem =
  /*#__PURE__*/ createSimulateContract({
    abi: redemptionFacetAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link treasuryFacetAbi}__
 */
export const readTreasuryFacet = /*#__PURE__*/ createReadContract({
  abi: treasuryFacetAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link treasuryFacetAbi}__ and `functionName` set to `"treasurer"`
 */
export const readTreasuryFacetTreasurer = /*#__PURE__*/ createReadContract({
  abi: treasuryFacetAbi,
  functionName: 'treasurer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link treasuryFacetAbi}__
 */
export const writeTreasuryFacet = /*#__PURE__*/ createWriteContract({
  abi: treasuryFacetAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link treasuryFacetAbi}__ and `functionName` set to `"changeTreasurer"`
 */
export const writeTreasuryFacetChangeTreasurer =
  /*#__PURE__*/ createWriteContract({
    abi: treasuryFacetAbi,
    functionName: 'changeTreasurer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link treasuryFacetAbi}__
 */
export const simulateTreasuryFacet = /*#__PURE__*/ createSimulateContract({
  abi: treasuryFacetAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link treasuryFacetAbi}__ and `functionName` set to `"changeTreasurer"`
 */
export const simulateTreasuryFacetChangeTreasurer =
  /*#__PURE__*/ createSimulateContract({
    abi: treasuryFacetAbi,
    functionName: 'changeTreasurer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link treasuryFacetAbi}__
 */
export const watchTreasuryFacetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: treasuryFacetAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link treasuryFacetAbi}__ and `eventName` set to `"TreasurerChanged"`
 */
export const watchTreasuryFacetTreasurerChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: treasuryFacetAbi,
    eventName: 'TreasurerChanged',
  })
