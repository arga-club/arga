import 'viem/window'
import { hardhat } from 'viem/chains'
import { toHexString } from '~/lib/validation-utils'

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
