/// Module: arga
module arga::arga {
    use std::string::{Self, String};
    use sui::balance::{Self, Balance};
    use sui::sui::SUI;
    use sui::coin::{Self, Coin};

    // DeclarationStatus
	const ACTIVE: u8 = 0;
	const PROOF_SUBMITTED: u8 = 0;
	const APRROVED: u8 = 0;
	const REJECTED: u8 = 0;

    public struct Declaration has key {
        id: UID,
        status: u8,
        summary: String,
        description: String,
        actor: address,
        witness: address,
        startDate: u64,
        endDate: u64,
        witnessByDate: u64,
        value: Balance<SUI>,
        proof: String
    }

    public struct WitnessCap has key {
        id: UID, 
        declaration: ID
    }

    // mutations
    public fun declareWithToken(
        summary: String,
        description: String,
        witness: address,
        startDate: u64,
        endDate: u64,
        witnessByDate: u64,
        value: Coin<SUI>,
        ctx: &mut TxContext) {
    // create declaration
        let uid = object::new(ctx);
        let id = object::uid_to_inner(&uid);
        let declaration = Declaration {
            id: uid,
            summary: summary,
            description: description,
            actor: tx_context::sender(ctx),
            witness: witness,
            startDate: startDate,
            endDate: endDate,
            witnessByDate: witnessByDate,
            value: coin::into_balance(value),
            status: ACTIVE,
            proof: string::utf8(b""),
        };
        transfer::transfer(declaration, ctx.sender());

        let witness_cap = WitnessCap {
            id: object::new(ctx), 
            declaration: id
        };
        transfer::transfer(witness_cap, witness);
    }
    


}
