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
        // balance: Balance<SUI>,
        // house: address,
        // public_key: vector<u8>,
        // max_stake: u64,
        // min_stake: u64,
        // fees: ,
        // base_fee_in_bp: u16
        status: u8,
        summary: String,
        description: String,
        actor: address,
        witness: address,
        startDate: u64,
        endDate: u64,
        witnessByDate: u64,
        value: Coin<SUI>,
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
        actor: address,
        witness: address,
        startDate: u64,
        endDate: u64,
        witnessByDate: u64,
        value: Coin<SUI>,
        ctx: &mut TxContext): Declaration {
    // create declaration
        Declaration {
            id: object::new(ctx),
            summary: summary,
            description: description,
            actor: actor,
            witness: witness,
            startDate: startDate,
            endDate: endDate,
            witnessByDate: witnessByDate,
            value: value,
            status: ACTIVE,
            proof: string::utf8(b""),
        }
    }
    


}
