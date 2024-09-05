export default {
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
		{
			name: 'hardhat',
			chainId: '31337',
			contracts: {
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
			},
		},
	],
	'11155420': [
		{
			name: 'optimismSepolia',
			chainId: '11155420',
			contracts: {
				Arga: {
					address: '0xcc42A9c7e0536Ea67Be83A7f69Fb275aEcE67F1f',
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
									name: 'winMultiplier',
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
					address: '0x7FE81B0835195ffeCa1aaB107845EebB14386aB9',
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
					address: '0x0325c0e405793BF97583F00e42fb7230fD74845B',
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
					address: '0xfF20ffdA4FD95C80165323e31d841762194743bA',
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
					address: '0xD8F6135f99a3E8eF1B4f4e51Be357726b44f168f',
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
					address: '0x23Cf916b755bd1Cd9E5e90256d770261F018D9cB',
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
					address: '0xE6B1D2Adbf4DEAC67C929BeD6454BC42852f3396',
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
					address: '0xAF3f56fC2c4C8C50805dC64BF8cA629Ca2F17109',
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
					address: '0x02EeEa303cbdd810E53B4150D77bc067eAD5FBa4',
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
