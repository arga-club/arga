/// Module: arga
module arga::arga {
    use std::string::{Self, String};
    use sui::balance::{Self, Balance};
    use sui::sui::SUI;
    use sui::coin::{Self, Coin};

    // DeclarationStatus
	const ACTIVE: u8 = 0;
	const REDEEMED: u8 = 1;

    // WitnessCapStatus
	const NOT_APPROVED: u8 = 10;
	const APPROVED: u8 = 11;
    const REJECTED: u8 = 12;

    // errors
    const EInvalidArgs: u64 = 90;

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
        witness_cap_id: ID,
    }

    public struct WitnessCap has key {
        id: UID, 
        declaration_id: ID,
        status: u8,
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
        let dec_uid = object::new(ctx);
        let dec_id = object::uid_to_inner(&dec_uid);
        let wit_uid = object::new(ctx);
        let wit_id = object::uid_to_inner(&wit_uid);

        let declaration = Declaration {
            id: dec_uid,
            summary: summary,
            description: description,
            actor: tx_context::sender(ctx),
            witness: witness,
            startDate: startDate,
            endDate: endDate,
            witnessByDate: witnessByDate,
            value: coin::into_balance(value),
            status: ACTIVE,
            witness_cap_id: wit_id
        };
        transfer::transfer(declaration, ctx.sender());
        
        let witness_cap = WitnessCap {
            id: wit_uid, 
            declaration_id: dec_id,
            status: NOT_APPROVED
        };
        transfer::transfer(witness_cap, witness);
    }

    public fun submitDeclarationProof(witness_cap: &mut WitnessCap, status: u8) {
        // TODO: assert status is in a valid range
        witness_cap.status = APPROVED;
    }

}
