import contracts from '~/lib/contracts'

type ChainId = 31337 | 11155420 | 10

export const getContractAddress = <Id extends ChainId>({ chainId }: { chainId: Id }) =>
	contracts[chainId][0].contracts.Arga.address
