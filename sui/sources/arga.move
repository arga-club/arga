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

    public struct Declaration has key, store {
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

    // TODO: initにadminができることを書く
    // ここでAdminが何を持つべきかよーわからんので後回し
    // fun init(otw: HOUSE_DATA, ctx: &mut TxContext) {
    // }

    // mutations
    public fun declareWithToken(
        summary: String,
        description: String,
        witness: address,
        startDate: u64,
        endDate: u64,
        witnessByDate: u64,
        value: Coin<SUI>,
        ctx: &mut TxContext): Declaration {
    // create declaration
        let uid = object::new(ctx);
        Declaration {
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
        }
    }
    


}
