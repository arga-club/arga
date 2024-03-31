import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

export default buildModule('Arga', m => {
	const arga = m.contract('Arga')
	return { arga }
})
