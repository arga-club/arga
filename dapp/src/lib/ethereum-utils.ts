import 'viem/window'
import { hardhat } from 'viem/chains'
import JSONBig from 'json-bigint'
import { waitForTransactionReceipt } from '@wagmi/core'
import { type Hash, decodeEventLog, parseEventLogs, bytesToHex } from 'viem'
import { toHexString } from '~/lib/validation-utils'
import { chainId, wagmiCoreConfig } from '~/lib/wagmi-config'
import { argaDiamondAbi } from '~/lib/generated'

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
		chainId,
	})
	const [logRaw] = parseEventLogs({
		abi: argaDiamondAbi,
		logs: receipt.logs,
	})
	if (!logRaw) return
	return decodeEventLog({
		abi: argaDiamondAbi,
		data: logRaw.data,
		topics: logRaw.topics,
	})
}

export const randomNumberForDraw = () => {
	const randomBytes = crypto.getRandomValues(new Uint8Array(32))
	const randomHex = bytesToHex(randomBytes)
	return randomHex
}
