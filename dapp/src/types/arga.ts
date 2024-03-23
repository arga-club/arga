import { type ContractFunctionArgs } from 'viem'
import { type UseReadContractReturnType } from 'wagmi'
import { type ArrayValues } from 'type-fest'
import { type argaAbi } from '~/lib/generated'

type ActorDeclarationsArgs = ContractFunctionArgs<typeof argaAbi, 'pure' | 'view', 'actorDeclarations'>
export type Declaration = ArrayValues<
	NonNullable<UseReadContractReturnType<typeof argaAbi, 'actorDeclarations', ActorDeclarationsArgs>['data']>
>
