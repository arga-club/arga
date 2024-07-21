import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

export default buildModule('Arga', m => {
	const Arga = m.contractAt('Arga', m.getParameter('address'))
	return { Arga }
})
