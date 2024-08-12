import { deployments } from 'hardhat'

describe('Deploy', function () {
	it('deploys', async function () {
		await deployments.fixture()
	})
})
