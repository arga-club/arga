import { type ContractFunctionArgs } from 'viem'
import { type UseReadContractReturnType } from 'wagmi'
import { type ArrayValues } from 'type-fest'
import { type argaDiamondAbi } from '~/lib/generated'

type ActorDeclarationsArgs = ContractFunctionArgs<typeof argaDiamondAbi, 'pure' | 'view', 'actorDeclarations'>
export type Declaration = ArrayValues<
	NonNullable<UseReadContractReturnType<typeof argaDiamondAbi, 'actorDeclarations', ActorDeclarationsArgs>['data']>
>

export const declarationStatus = {
	active: 0,
	proofSubmitted: 1,
	approved: 2,
	rejected: 3,
}
