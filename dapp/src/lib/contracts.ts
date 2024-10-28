export default {
	'10': [
		{
			name: 'optimism',
			chainId: '10',
			contracts: {
				DiamondCutFacet: {
					address: '0xD5413A5D23191cf1f1C79AF01544FCDd763Ba898',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_initializationContractAddress',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'InitializationFunctionReverted',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									indexed: false,
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									indexed: false,
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									indexed: false,
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'DiamondCut',
							type: 'event',
						},
						{
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'diamondCut',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				Arga: {
					address: '0x87356f30ee14515F467bb6c263593080775880d2',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_contractOwner',
									type: 'address',
								},
								{
									internalType: 'address',
									name: '_diamondCutFacet',
									type: 'address',
								},
							],
							stateMutability: 'payable',
							type: 'constructor',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_initializationContractAddress',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'InitializationFunctionReverted',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									indexed: false,
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									indexed: false,
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									indexed: false,
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'DiamondCut',
							type: 'event',
						},
						{
							stateMutability: 'payable',
							type: 'fallback',
						},
						{
							stateMutability: 'payable',
							type: 'receive',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'InvalidActor',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'InvalidWitness',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationMade',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationStatusChange',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'uint256',
									name: 'drawId',
									type: 'uint256',
								},
							],
							name: 'PoolDrawn',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'actorDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							name: 'communityDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithApproval',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithRejection',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'string',
									name: 'summary',
									type: 'string',
								},
								{
									internalType: 'string',
									name: 'description',
									type: 'string',
								},
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'startDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'endDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'witnessByDate',
									type: 'uint256',
								},
							],
							name: 'declareWithEther',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'payable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'index',
									type: 'uint256',
								},
							],
							name: 'getDeclaration',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'string',
									name: 'proof',
									type: 'string',
								},
							],
							name: 'submitDeclarationProof',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'witnessDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'sender',
									type: 'address',
								},
							],
							name: 'InvalidEntropyContract',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'sequence',
									type: 'uint64',
								},
								{
									internalType: 'address',
									name: 'provider',
									type: 'address',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: '_entropyCallback',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: '_winMultiplier',
									type: 'uint256',
								},
							],
							name: 'changeWinMultiplier',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'drawId',
									type: 'uint64',
								},
							],
							name: 'draw',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'declarationId',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral[]',
											name: 'pool',
											type: 'tuple[]',
										},
										{
											internalType: 'uint256',
											name: 'chanceToWin',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DrawStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
									],
									internalType: 'struct ArgaLibrary.Draw',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'pool',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'winMultiplier',
							outputs: [
								{
									internalType: 'uint256',
									name: '',
									type: 'uint256',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address payable',
									name: 'destination',
									type: 'address',
								},
								{
									internalType: 'address[]',
									name: 'erc20Addresses',
									type: 'address[]',
								},
							],
							name: 'redeem',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'party',
									type: 'address',
								},
							],
							name: 'redemptionsForParty',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'ZeroAddress',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
							],
							name: 'TreasurerChanged',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'newTreasurer',
									type: 'address',
								},
							],
							name: 'changeTreasurer',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [],
							name: 'treasurer',
							outputs: [
								{
									internalType: 'address',
									name: '_treasurer',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_owner',
									type: 'address',
								},
							],
							name: 'OwnableInvalidOwner',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: true,
									internalType: 'address',
									name: 'previousOwner',
									type: 'address',
								},
								{
									indexed: true,
									internalType: 'address',
									name: 'newOwner',
									type: 'address',
								},
							],
							name: 'OwnershipTransferred',
							type: 'event',
						},
						{
							inputs: [],
							name: 'owner',
							outputs: [
								{
									internalType: 'address',
									name: 'owner_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'renounceOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_newOwner',
									type: 'address',
								},
							],
							name: 'transferOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				DiamondLoupeFacet: {
					address: '0xeabb0f00c9964340Cbb237510339B69b70Cb1E8A',
					abi: [
						{
							inputs: [
								{
									internalType: 'bytes4',
									name: '_functionSelector',
									type: 'bytes4',
								},
							],
							name: 'facetAddress',
							outputs: [
								{
									internalType: 'address',
									name: 'facetAddress_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'facetAddresses',
							outputs: [
								{
									internalType: 'address[]',
									name: 'facetAddresses_',
									type: 'address[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_facet',
									type: 'address',
								},
							],
							name: 'facetFunctionSelectors',
							outputs: [
								{
									internalType: 'bytes4[]',
									name: '_facetFunctionSelectors',
									type: 'bytes4[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'facets',
							outputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									internalType: 'struct IDiamondLoupe.Facet[]',
									name: 'facets_',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'bytes4',
									name: '_interfaceId',
									type: 'bytes4',
								},
							],
							name: 'supportsInterface',
							outputs: [
								{
									internalType: 'bool',
									name: '',
									type: 'bool',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				OwnershipFacet: {
					address: '0x7D08522EF9B498d2c36E887d10c7ffd5B75Ad8Fc',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_owner',
									type: 'address',
								},
							],
							name: 'OwnableInvalidOwner',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: true,
									internalType: 'address',
									name: 'previousOwner',
									type: 'address',
								},
								{
									indexed: true,
									internalType: 'address',
									name: 'newOwner',
									type: 'address',
								},
							],
							name: 'OwnershipTransferred',
							type: 'event',
						},
						{
							inputs: [],
							name: 'owner',
							outputs: [
								{
									internalType: 'address',
									name: 'owner_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'renounceOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_newOwner',
									type: 'address',
								},
							],
							name: 'transferOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				DeclarationFacet: {
					address: '0x32a194f34493CEd690517Dc183202F16353071f5',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'InvalidActor',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'InvalidWitness',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationMade',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationStatusChange',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'uint256',
									name: 'drawId',
									type: 'uint256',
								},
							],
							name: 'PoolDrawn',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'actorDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							name: 'communityDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithApproval',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithRejection',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'string',
									name: 'summary',
									type: 'string',
								},
								{
									internalType: 'string',
									name: 'description',
									type: 'string',
								},
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'startDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'endDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'witnessByDate',
									type: 'uint256',
								},
							],
							name: 'declareWithEther',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'payable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'index',
									type: 'uint256',
								},
							],
							name: 'getDeclaration',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'string',
									name: 'proof',
									type: 'string',
								},
							],
							name: 'submitDeclarationProof',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'witnessDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				PoolFacet: {
					address: '0xC696AffF913f70DBa95eD82065f61F12a259cD58',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'sender',
									type: 'address',
								},
							],
							name: 'InvalidEntropyContract',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'sequence',
									type: 'uint64',
								},
								{
									internalType: 'address',
									name: 'provider',
									type: 'address',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: '_entropyCallback',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: '_winMultiplier',
									type: 'uint256',
								},
							],
							name: 'changeWinMultiplier',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'drawId',
									type: 'uint64',
								},
							],
							name: 'draw',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'declarationId',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral[]',
											name: 'pool',
											type: 'tuple[]',
										},
										{
											internalType: 'uint256',
											name: 'chanceToWin',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DrawStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
									],
									internalType: 'struct ArgaLibrary.Draw',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'pool',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'winMultiplier',
							outputs: [
								{
									internalType: 'uint256',
									name: '',
									type: 'uint256',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				RedemptionFacet: {
					address: '0x286F09eac30739d43447F22b6Dc2D466a95daeD9',
					abi: [
						{
							inputs: [
								{
									internalType: 'address payable',
									name: 'destination',
									type: 'address',
								},
								{
									internalType: 'address[]',
									name: 'erc20Addresses',
									type: 'address[]',
								},
							],
							name: 'redeem',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'party',
									type: 'address',
								},
							],
							name: 'redemptionsForParty',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				TreasuryFacet: {
					address: '0x44167d6D5cCeD7558740fC590b6677dfE917d01F',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [],
							name: 'ZeroAddress',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
							],
							name: 'TreasurerChanged',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'newTreasurer',
									type: 'address',
								},
							],
							name: 'changeTreasurer',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [],
							name: 'treasurer',
							outputs: [
								{
									internalType: 'address',
									name: '_treasurer',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				DiamondInit: {
					address: '0x087D7FB62285c4C02Eb857C0835859A0Ce66Aa97',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'entropyContractAddress',
									type: 'address',
								},
							],
							name: 'WrongEntropyContractAddress',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'entropyContractAddress',
									type: 'address',
								},
							],
							name: 'init',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_addr',
									type: 'address',
								},
							],
							name: 'isContract',
							outputs: [
								{
									internalType: 'bool',
									name: '',
									type: 'bool',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
			},
		},
	],
	'31337': [
		{
			name: 'localhost',
			chainId: '31337',
			contracts: {
				Arga: {
					address: '0x5416adf327242B7224413Dcd6E454FfcB5C1e73C',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_contractOwner',
									type: 'address',
								},
								{
									internalType: 'address',
									name: '_diamondCutFacet',
									type: 'address',
								},
							],
							stateMutability: 'payable',
							type: 'constructor',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_initializationContractAddress',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'InitializationFunctionReverted',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									indexed: false,
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									indexed: false,
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									indexed: false,
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'DiamondCut',
							type: 'event',
						},
						{
							stateMutability: 'payable',
							type: 'fallback',
						},
						{
							stateMutability: 'payable',
							type: 'receive',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'InvalidActor',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'InvalidWitness',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationMade',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationStatusChange',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'uint256',
									name: 'drawId',
									type: 'uint256',
								},
							],
							name: 'PoolDrawn',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'actorDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							name: 'communityDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithApproval',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithRejection',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'string',
									name: 'summary',
									type: 'string',
								},
								{
									internalType: 'string',
									name: 'description',
									type: 'string',
								},
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'startDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'endDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'witnessByDate',
									type: 'uint256',
								},
							],
							name: 'declareWithEther',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'payable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'index',
									type: 'uint256',
								},
							],
							name: 'getDeclaration',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'string',
									name: 'proof',
									type: 'string',
								},
							],
							name: 'submitDeclarationProof',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'witnessDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'sender',
									type: 'address',
								},
							],
							name: 'InvalidEntropyContract',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'sequence',
									type: 'uint64',
								},
								{
									internalType: 'address',
									name: 'provider',
									type: 'address',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: '_entropyCallback',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: '_winMultiplier',
									type: 'uint256',
								},
							],
							name: 'changeWinMultiplier',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'drawId',
									type: 'uint64',
								},
							],
							name: 'draw',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'declarationId',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral[]',
											name: 'pool',
											type: 'tuple[]',
										},
										{
											internalType: 'uint256',
											name: 'chanceToWin',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DrawStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
									],
									internalType: 'struct ArgaLibrary.Draw',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'pool',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'winMultiplier',
							outputs: [
								{
									internalType: 'uint256',
									name: '',
									type: 'uint256',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address payable',
									name: 'destination',
									type: 'address',
								},
								{
									internalType: 'address[]',
									name: 'erc20Addresses',
									type: 'address[]',
								},
							],
							name: 'redeem',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'party',
									type: 'address',
								},
							],
							name: 'redemptionsForParty',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'ZeroAddress',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
							],
							name: 'TreasurerChanged',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'newTreasurer',
									type: 'address',
								},
							],
							name: 'changeTreasurer',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [],
							name: 'treasurer',
							outputs: [
								{
									internalType: 'address',
									name: '_treasurer',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_owner',
									type: 'address',
								},
							],
							name: 'OwnableInvalidOwner',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: true,
									internalType: 'address',
									name: 'previousOwner',
									type: 'address',
								},
								{
									indexed: true,
									internalType: 'address',
									name: 'newOwner',
									type: 'address',
								},
							],
							name: 'OwnershipTransferred',
							type: 'event',
						},
						{
							inputs: [],
							name: 'owner',
							outputs: [
								{
									internalType: 'address',
									name: 'owner_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'renounceOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_newOwner',
									type: 'address',
								},
							],
							name: 'transferOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				DeclarationFacet: {
					address: '0xc12a6C5db256d292aab034c4E5c4f6BBe4c0afAC',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'InvalidActor',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'InvalidWitness',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationMade',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationStatusChange',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'uint256',
									name: 'drawId',
									type: 'uint256',
								},
							],
							name: 'PoolDrawn',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'actorDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							name: 'communityDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithApproval',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithRejection',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'string',
									name: 'summary',
									type: 'string',
								},
								{
									internalType: 'string',
									name: 'description',
									type: 'string',
								},
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'startDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'endDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'witnessByDate',
									type: 'uint256',
								},
							],
							name: 'declareWithEther',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'payable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'index',
									type: 'uint256',
								},
							],
							name: 'getDeclaration',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'string',
									name: 'proof',
									type: 'string',
								},
							],
							name: 'submitDeclarationProof',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'witnessDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				DiamondCutFacet: {
					address: '0xB7c61e6987144bC0E692E6Bde2B845B9e29D4cD9',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_initializationContractAddress',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'InitializationFunctionReverted',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									indexed: false,
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									indexed: false,
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									indexed: false,
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'DiamondCut',
							type: 'event',
						},
						{
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'diamondCut',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				DiamondInit: {
					address: '0xD9aE19157f695c140CC45891bdEC9B467e7c1910',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'entropyContractAddress',
									type: 'address',
								},
							],
							name: 'WrongEntropyContractAddress',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'entropyContractAddress',
									type: 'address',
								},
							],
							name: 'init',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_addr',
									type: 'address',
								},
							],
							name: 'isContract',
							outputs: [
								{
									internalType: 'bool',
									name: '',
									type: 'bool',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				DiamondLoupeFacet: {
					address: '0x73c1A1437920ECFEC6Ac079d717CB75c0B0e9086',
					abi: [
						{
							inputs: [
								{
									internalType: 'bytes4',
									name: '_functionSelector',
									type: 'bytes4',
								},
							],
							name: 'facetAddress',
							outputs: [
								{
									internalType: 'address',
									name: 'facetAddress_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'facetAddresses',
							outputs: [
								{
									internalType: 'address[]',
									name: 'facetAddresses_',
									type: 'address[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_facet',
									type: 'address',
								},
							],
							name: 'facetFunctionSelectors',
							outputs: [
								{
									internalType: 'bytes4[]',
									name: '_facetFunctionSelectors',
									type: 'bytes4[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'facets',
							outputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									internalType: 'struct IDiamondLoupe.Facet[]',
									name: 'facets_',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'bytes4',
									name: '_interfaceId',
									type: 'bytes4',
								},
							],
							name: 'supportsInterface',
							outputs: [
								{
									internalType: 'bool',
									name: '',
									type: 'bool',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				OwnershipFacet: {
					address: '0x53A16c7b5fB15E3786B068Eb199023394Cc15C5b',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_owner',
									type: 'address',
								},
							],
							name: 'OwnableInvalidOwner',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: true,
									internalType: 'address',
									name: 'previousOwner',
									type: 'address',
								},
								{
									indexed: true,
									internalType: 'address',
									name: 'newOwner',
									type: 'address',
								},
							],
							name: 'OwnershipTransferred',
							type: 'event',
						},
						{
							inputs: [],
							name: 'owner',
							outputs: [
								{
									internalType: 'address',
									name: 'owner_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'renounceOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_newOwner',
									type: 'address',
								},
							],
							name: 'transferOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				PoolFacet: {
					address: '0xCFA293D910719f8C1ddDD0CA5dDd3D6Cbf681833',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'sender',
									type: 'address',
								},
							],
							name: 'InvalidEntropyContract',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'sequence',
									type: 'uint64',
								},
								{
									internalType: 'address',
									name: 'provider',
									type: 'address',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: '_entropyCallback',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: '_winMultiplier',
									type: 'uint256',
								},
							],
							name: 'changeWinMultiplier',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'drawId',
									type: 'uint64',
								},
							],
							name: 'draw',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'declarationId',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral[]',
											name: 'pool',
											type: 'tuple[]',
										},
										{
											internalType: 'uint256',
											name: 'chanceToWin',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DrawStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
									],
									internalType: 'struct ArgaLibrary.Draw',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'pool',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'winMultiplier',
							outputs: [
								{
									internalType: 'uint256',
									name: '',
									type: 'uint256',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				RedemptionFacet: {
					address: '0x5564efCae4bbf9eBd388a4Bf56688E51913c84D4',
					abi: [
						{
							inputs: [
								{
									internalType: 'address payable',
									name: 'destination',
									type: 'address',
								},
								{
									internalType: 'address[]',
									name: 'erc20Addresses',
									type: 'address[]',
								},
							],
							name: 'redeem',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'party',
									type: 'address',
								},
							],
							name: 'redemptionsForParty',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				TreasuryFacet: {
					address: '0x365FfAac541ad6A847603dc2C6e981B9A888C781',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [],
							name: 'ZeroAddress',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
							],
							name: 'TreasurerChanged',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'newTreasurer',
									type: 'address',
								},
							],
							name: 'changeTreasurer',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [],
							name: 'treasurer',
							outputs: [
								{
									internalType: 'address',
									name: '_treasurer',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
			},
		},
	],
	'11155420': [
		{
			name: 'optimismSepolia',
			chainId: '11155420',
			contracts: {
				Arga: {
					address: '0x29314a5679B32FcF529A14136AD2b50A82eE7f94',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_contractOwner',
									type: 'address',
								},
								{
									internalType: 'address',
									name: '_diamondCutFacet',
									type: 'address',
								},
							],
							stateMutability: 'payable',
							type: 'constructor',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_initializationContractAddress',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'InitializationFunctionReverted',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									indexed: false,
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									indexed: false,
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									indexed: false,
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'DiamondCut',
							type: 'event',
						},
						{
							stateMutability: 'payable',
							type: 'fallback',
						},
						{
							stateMutability: 'payable',
							type: 'receive',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'InvalidActor',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'InvalidWitness',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationMade',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationStatusChange',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'uint256',
									name: 'drawId',
									type: 'uint256',
								},
							],
							name: 'PoolDrawn',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'actorDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							name: 'communityDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithApproval',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithRejection',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'string',
									name: 'summary',
									type: 'string',
								},
								{
									internalType: 'string',
									name: 'description',
									type: 'string',
								},
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'startDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'endDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'witnessByDate',
									type: 'uint256',
								},
							],
							name: 'declareWithEther',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'payable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'index',
									type: 'uint256',
								},
							],
							name: 'getDeclaration',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'string',
									name: 'proof',
									type: 'string',
								},
							],
							name: 'submitDeclarationProof',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'witnessDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'sender',
									type: 'address',
								},
							],
							name: 'InvalidEntropyContract',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'sequence',
									type: 'uint64',
								},
								{
									internalType: 'address',
									name: 'provider',
									type: 'address',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: '_entropyCallback',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: '_winMultiplier',
									type: 'uint256',
								},
							],
							name: 'changeWinMultiplier',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'drawId',
									type: 'uint64',
								},
							],
							name: 'draw',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'declarationId',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral[]',
											name: 'pool',
											type: 'tuple[]',
										},
										{
											internalType: 'uint256',
											name: 'chanceToWin',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DrawStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'declarationCollateralValue',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'poolValue',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'feesTotalPercent',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'winMultiplier',
											type: 'uint256',
										},
									],
									internalType: 'struct ArgaLibrary.Draw',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'pool',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'winMultiplier',
							outputs: [
								{
									internalType: 'uint256',
									name: '',
									type: 'uint256',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address payable',
									name: 'destination',
									type: 'address',
								},
								{
									internalType: 'address[]',
									name: 'erc20Addresses',
									type: 'address[]',
								},
							],
							name: 'redeem',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'party',
									type: 'address',
								},
							],
							name: 'redemptionsForParty',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'ZeroAddress',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
							],
							name: 'TreasurerChanged',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'newTreasurer',
									type: 'address',
								},
							],
							name: 'changeTreasurer',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [],
							name: 'treasurer',
							outputs: [
								{
									internalType: 'address',
									name: '_treasurer',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_owner',
									type: 'address',
								},
							],
							name: 'OwnableInvalidOwner',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: true,
									internalType: 'address',
									name: 'previousOwner',
									type: 'address',
								},
								{
									indexed: true,
									internalType: 'address',
									name: 'newOwner',
									type: 'address',
								},
							],
							name: 'OwnershipTransferred',
							type: 'event',
						},
						{
							inputs: [],
							name: 'owner',
							outputs: [
								{
									internalType: 'address',
									name: 'owner_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'renounceOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_newOwner',
									type: 'address',
								},
							],
							name: 'transferOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				DeclarationFacet: {
					address: '0x65d3061a3d6d9040f4C46B7f39de92a6CA9BEa92',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'InvalidActor',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'InvalidWitness',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationMade',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									indexed: false,
									internalType: 'struct ArgaLibrary.Declaration',
									name: 'declaration',
									type: 'tuple',
								},
							],
							name: 'DeclarationStatusChange',
							type: 'event',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'uint256',
									name: 'drawId',
									type: 'uint256',
								},
							],
							name: 'PoolDrawn',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
							],
							name: 'actorDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							name: 'communityDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithApproval',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: 'concludeDeclarationWithRejection',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'string',
									name: 'summary',
									type: 'string',
								},
								{
									internalType: 'string',
									name: 'description',
									type: 'string',
								},
								{
									internalType: 'address',
									name: 'actor',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'startDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'endDate',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'witnessByDate',
									type: 'uint256',
								},
							],
							name: 'declareWithEther',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'payable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'index',
									type: 'uint256',
								},
							],
							name: 'getDeclaration',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'string',
									name: 'proof',
									type: 'string',
								},
							],
							name: 'submitDeclarationProof',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'witness',
									type: 'address',
								},
							],
							name: 'witnessDeclarations',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'id',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DeclarationStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'string',
											name: 'summary',
											type: 'string',
										},
										{
											internalType: 'string',
											name: 'description',
											type: 'string',
										},
										{
											internalType: 'address',
											name: 'actor',
											type: 'address',
										},
										{
											internalType: 'address',
											name: 'witness',
											type: 'address',
										},
										{
											internalType: 'uint256',
											name: 'startDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'endDate',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'witnessByDate',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral',
											name: 'collateral',
											type: 'tuple',
										},
										{
											internalType: 'string',
											name: 'proof',
											type: 'string',
										},
										{
											internalType: 'uint64',
											name: 'drawId',
											type: 'uint64',
										},
									],
									internalType: 'struct ArgaLibrary.Declaration[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				DiamondCutFacet: {
					address: '0x2B92c0AddfD84087356A5Ea4B7681B2498140F9a',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_initializationContractAddress',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'InitializationFunctionReverted',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									indexed: false,
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									indexed: false,
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									indexed: false,
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'DiamondCut',
							type: 'event',
						},
						{
							inputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'enum IDiamondCut.FacetCutAction',
											name: 'action',
											type: 'uint8',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									internalType: 'struct IDiamondCut.FacetCut[]',
									name: '_diamondCut',
									type: 'tuple[]',
								},
								{
									internalType: 'address',
									name: '_init',
									type: 'address',
								},
								{
									internalType: 'bytes',
									name: '_calldata',
									type: 'bytes',
								},
							],
							name: 'diamondCut',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				DiamondInit: {
					address: '0x10F2c840D1c8605e0E68BD0a1409A53791F6Da40',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'entropyContractAddress',
									type: 'address',
								},
							],
							name: 'WrongEntropyContractAddress',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
								{
									internalType: 'address',
									name: 'entropyContractAddress',
									type: 'address',
								},
							],
							name: 'init',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_addr',
									type: 'address',
								},
							],
							name: 'isContract',
							outputs: [
								{
									internalType: 'bool',
									name: '',
									type: 'bool',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				DiamondLoupeFacet: {
					address: '0x6e2ef5C221a7F87C4472538e2b38a3daA42318f9',
					abi: [
						{
							inputs: [
								{
									internalType: 'bytes4',
									name: '_functionSelector',
									type: 'bytes4',
								},
							],
							name: 'facetAddress',
							outputs: [
								{
									internalType: 'address',
									name: 'facetAddress_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'facetAddresses',
							outputs: [
								{
									internalType: 'address[]',
									name: 'facetAddresses_',
									type: 'address[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_facet',
									type: 'address',
								},
							],
							name: 'facetFunctionSelectors',
							outputs: [
								{
									internalType: 'bytes4[]',
									name: '_facetFunctionSelectors',
									type: 'bytes4[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'facets',
							outputs: [
								{
									components: [
										{
											internalType: 'address',
											name: 'facetAddress',
											type: 'address',
										},
										{
											internalType: 'bytes4[]',
											name: 'functionSelectors',
											type: 'bytes4[]',
										},
									],
									internalType: 'struct IDiamondLoupe.Facet[]',
									name: 'facets_',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'bytes4',
									name: '_interfaceId',
									type: 'bytes4',
								},
							],
							name: 'supportsInterface',
							outputs: [
								{
									internalType: 'bool',
									name: '',
									type: 'bool',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				OwnershipFacet: {
					address: '0x6eb7CF5003aeF81cd0C11EFA6A5CCBCA947b622F',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_owner',
									type: 'address',
								},
							],
							name: 'OwnableInvalidOwner',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: true,
									internalType: 'address',
									name: 'previousOwner',
									type: 'address',
								},
								{
									indexed: true,
									internalType: 'address',
									name: 'newOwner',
									type: 'address',
								},
							],
							name: 'OwnershipTransferred',
							type: 'event',
						},
						{
							inputs: [],
							name: 'owner',
							outputs: [
								{
									internalType: 'address',
									name: 'owner_',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'renounceOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_newOwner',
									type: 'address',
								},
							],
							name: 'transferOwnership',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
					],
				},
				PoolFacet: {
					address: '0x0C4bf7E0656bbe759366a6A00DeA6DB6B793C99D',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: 'sender',
									type: 'address',
								},
							],
							name: 'InvalidEntropyContract',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'sequence',
									type: 'uint64',
								},
								{
									internalType: 'address',
									name: 'provider',
									type: 'address',
								},
								{
									internalType: 'bytes32',
									name: 'randomNumber',
									type: 'bytes32',
								},
							],
							name: '_entropyCallback',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint256',
									name: '_winMultiplier',
									type: 'uint256',
								},
							],
							name: 'changeWinMultiplier',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'uint64',
									name: 'drawId',
									type: 'uint64',
								},
							],
							name: 'draw',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'declarationId',
											type: 'uint256',
										},
										{
											components: [
												{
													internalType: 'uint256',
													name: 'value',
													type: 'uint256',
												},
												{
													internalType: 'address',
													name: 'erc20Address',
													type: 'address',
												},
											],
											internalType: 'struct ArgaLibrary.Collateral[]',
											name: 'pool',
											type: 'tuple[]',
										},
										{
											internalType: 'uint256',
											name: 'chanceToWin',
											type: 'uint256',
										},
										{
											internalType: 'enum ArgaLibrary.DrawStatus',
											name: 'status',
											type: 'uint8',
										},
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'declarationCollateralValue',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'poolValue',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'feesTotalPercent',
											type: 'uint256',
										},
										{
											internalType: 'uint256',
											name: 'winMultiplier',
											type: 'uint256',
										},
									],
									internalType: 'struct ArgaLibrary.Draw',
									name: '',
									type: 'tuple',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'pool',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
						{
							inputs: [],
							name: 'winMultiplier',
							outputs: [
								{
									internalType: 'uint256',
									name: '',
									type: 'uint256',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				RedemptionFacet: {
					address: '0xCB1f5b64e31bD6205A2B739F2Ec566fe8790D893',
					abi: [
						{
							inputs: [
								{
									internalType: 'address payable',
									name: 'destination',
									type: 'address',
								},
								{
									internalType: 'address[]',
									name: 'erc20Addresses',
									type: 'address[]',
								},
							],
							name: 'redeem',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'party',
									type: 'address',
								},
							],
							name: 'redemptionsForParty',
							outputs: [
								{
									components: [
										{
											internalType: 'uint256',
											name: 'value',
											type: 'uint256',
										},
										{
											internalType: 'address',
											name: 'erc20Address',
											type: 'address',
										},
									],
									internalType: 'struct ArgaLibrary.Collateral[]',
									name: '',
									type: 'tuple[]',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
				TreasuryFacet: {
					address: '0x38e54a0d532b948521f5cE6d801697B05630F426',
					abi: [
						{
							inputs: [
								{
									internalType: 'address',
									name: '_invalidAddress',
									type: 'address',
								},
							],
							name: 'OwnableUnauthorizedAccount',
							type: 'error',
						},
						{
							inputs: [],
							name: 'ZeroAddress',
							type: 'error',
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: false,
									internalType: 'address',
									name: 'treasurer',
									type: 'address',
								},
							],
							name: 'TreasurerChanged',
							type: 'event',
						},
						{
							inputs: [
								{
									internalType: 'address',
									name: 'newTreasurer',
									type: 'address',
								},
							],
							name: 'changeTreasurer',
							outputs: [],
							stateMutability: 'nonpayable',
							type: 'function',
						},
						{
							inputs: [],
							name: 'treasurer',
							outputs: [
								{
									internalType: 'address',
									name: '_treasurer',
									type: 'address',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
				},
			},
		},
	],
} as const
