import 'viem/window'
import { hardhat } from 'viem/chains'
import JSONBig from 'json-bigint'
import { waitForTransactionReceipt } from '@wagmi/core'
import { type Hash, decodeEventLog, parseEventLogs } from 'viem'
import { toHexString } from '~/lib/validation-utils'
import { wagmiCoreConfig } from '~/lib/wagmi-config'
import { argaAbi } from '~/lib/generated'

export const addChainToWallet = async () => {
	const result = await window.ethereum?.request({
		method: 'wallet_addEthereumChain',
		params: [
			{
				chainId: toHexString(hardhat.id),
				chainName: 'hardhat',
				rpcUrls: ['http://0.0.0.0:8545'],
			},
		],
	})
	console.debug({ result })
}

export const normalizeBigJSON = (value: object) => JSON.parse(JSONBig.stringify(value))

export const logFromPendingTransaction = async (pendingTransaction: Hash) => {
	const receipt = await waitForTransactionReceipt(wagmiCoreConfig, {
		hash: pendingTransaction,
		chainId: hardhat.id,
	})
	const [logRaw] = parseEventLogs({
		abi: argaAbi,
		logs: receipt.logs,
	})
	if (!logRaw) return
	return decodeEventLog({
		abi: argaAbi,
		data: logRaw.data,
		topics: logRaw.topics,
	})
}
