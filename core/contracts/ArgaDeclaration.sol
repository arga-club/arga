// SPDX-License-Identifier: UNLICENSED

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import '@openzeppelin/contracts/utils/math/Math.sol';
import 'hardhat/console.sol';

pragma solidity ^0.8.22;

contract ArgaDeclaration is Initializable, UUPSUpgradeable, OwnableUpgradeable {
	// variables

	mapping(bytes4 => string) private sigNames;
	address parentContract;

	// upgradeability boilerplate

	function initialize(address initialOwner) public initializer {
		__Ownable_init(initialOwner);
		__UUPSUpgradeable_init();

		sigNames[bytes4(0x313ce567)] = 'decimals';
		sigNames[bytes4(0x95d89b41)] = 'symbol';
		sigNames[bytes4(0x06fdde03)] = 'name';
		sigNames[bytes4(0x18160ddd)] = 'totalSupply';
		sigNames[bytes4(0x01ffc9a7)] = 'supportsInterface';
	}
	/// @custom:oz-upgrades-unsafe-allow constructor
	constructor() {
		_disableInitializers();
	}
	function _authorizeUpgrade(address) internal override onlyOwner {}

	// logging fallbacks

	function logFallback() internal view {
		console.log('msg.value: ', msg.value);
		console.log('not implemented selector: ', sigNames[msg.sig]);
		console.logBytes4(msg.sig);
	}
	fallback() external payable {
		console.log('----- fallback');
		logFallback();
	}
	receive() external payable {
		console.log('----- receive');
		logFallback();
	}

	// access control

	modifier onlyParent() {
		require(msg.sender == parentContract, 'must be called from parent contract');
		_;
	}
	function setParentContract(address _parentContract) public onlyOwner {
		parentContract = _parentContract;
		emit ParentContractChanged(_parentContract);
	}

	// implementation

	Declaration[] private _declarations;

	modifier validAddress(address _addr) {
		require(_addr != address(0), 'Invalid address');
		_;
	}

	function getDeclaration(uint index) public view returns (Declaration memory) {
		return _declarations[index];
	}

	// we store indices of declarations per actor address
	mapping(address => uint[]) _actorDeclarations;
	function actorDeclarations(address actor) public view returns (Declaration[] memory) {
		uint[] storage indices = _actorDeclarations[actor];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = _declarations[indices[index]];
		}
		return result;
	}
	// TODO: lastActorDeclaration

	// we store indices of declarations per witness address
	mapping(address => uint[]) _witnessDeclarations;
	function witnessDeclarations(address witness) public view returns (Declaration[] memory) {
		uint[] storage indices = _witnessDeclarations[witness];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = _declarations[indices[index]];
		}
		return result;
	}

	function communityDeclarations(address actor, uint amount) public view returns (Declaration[] memory) {
		uint[] storage indices = _actorDeclarations[actor];
		uint resultLength = Math.max(Math.min(amount, _declarations.length - indices.length), 0);
		Declaration[] memory result = new Declaration[](resultLength);
		uint resultIndex = 0;
		uint declarationIndex = _declarations.length - 1;
		while (resultIndex < resultLength) {
			Declaration memory foundDeclaration = _declarations[declarationIndex];
			if (foundDeclaration.actor == actor || foundDeclaration.actor == address(0)) {
				if (declarationIndex == 0) {
					break;
				}
				declarationIndex--;
				resultIndex++;
				continue;
			}
			result[resultIndex] = foundDeclaration;
			if (declarationIndex == 0) {
				break;
			}
			declarationIndex--;
			resultIndex++;
		}
		return result;
	}

	function declareWithEther(
		string memory summary,
		string memory description,
		address actor,
		address witness,
		uint startDate,
		uint endDate,
		uint witnessByDate,
		uint value
	) public onlyParent returns (Declaration memory) {
		uint declarationIndex = _declarations.length;
		require(endDate > startDate, 'endDate must be before startDate');
		require(witnessByDate > endDate, 'witnessByDate must be before endDate');
		Declaration memory declaration = Declaration(
			declarationIndex,
			DeclarationStatus.Active,
			summary,
			description,
			actor,
			witness,
			startDate,
			endDate,
			witnessByDate,
			Collateral(value, address(0)),
			''
		);
		emit DeclarationMade(declaration);
		_declarations.push(declaration);
		_actorDeclarations[actor].push(declarationIndex);
		_witnessDeclarations[witness].push(declarationIndex);
		return declaration;
	}

	function setStatus(uint id, DeclarationStatus newStatus) public onlyParent returns (Declaration memory) {
		_declarations[id].status = newStatus;
		emit DeclarationStatusChange(_declarations[id]);
		return _declarations[id];
	}

	function submitDeclarationProof(uint id, string memory proof) public onlyParent returns (Declaration memory) {
		_declarations[id].proof = proof;
		return setStatus(id, DeclarationStatus.ProofSubmitted);
	}
}

event ParentContractChanged(address parentContract);
event DeclarationMade(Declaration declaration);
event DeclarationStatusChange(Declaration declaration);

struct Collateral {
	uint value;
	address erc20Address;
}
enum DeclarationStatus {
	Active,
	ProofSubmitted,
	Approved,
	Rejected
}
struct Declaration {
	uint id;
	DeclarationStatus status;
	string summary;
	string description;
	// address sender;
	// uint group id;
	address actor;
	address witness;
	// uint witnessRedemptionValue;
	uint startDate;
	uint endDate;
	uint witnessByDate;
	Collateral collateral;
	string proof;
	// bool hasWon;
}
