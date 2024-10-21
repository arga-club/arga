import contracts from '~/lib/contracts'
import { chainId } from '~/lib/wagmi-config'

type ChainId = 31337 | 11155420 | 10

export const getContractAddress = <Id extends ChainId>({ chainId }: { chainId: Id }) =>
	contracts[chainId][0].contracts.Arga.address

export const argaInstance = {
	address: getContractAddress({ chainId }),
	abi: contracts[chainId][0].contracts.Arga.abi,
	chainId,
} as const

export const declarationStatus = {
	active: 0,
	proofSubmitted: 1,
	approved: 2,
	rejected: 3,
} as const

export const declarationStatusLabels = ['Active', 'Proof submitted', 'Approved', 'Rejected']

export const declarationStatusClasses = ['text-orange-500', 'text-blue-500', 'text-green-600', 'text-red-500']
