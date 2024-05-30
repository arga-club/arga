#![no_std]
use soroban_sdk::{contract, contractimpl, symbol, Env, BytesN, RawVal};

#[derive(Clone, Debug, PartialEq)]
pub struct Declaration {
    pub id: u64,
    pub status: DeclarationStatus,
    pub summary: String,
    pub description: String,
    pub actor: BytesN<32>,
    pub witness: BytesN<32>,
    pub start_date: u64,
    pub end_date: u64,
    pub witness_by_date: u64,
    pub collateral: Collateral,
    pub proof: String,
}

#[derive(Clone, Debug, PartialEq)]
pub enum DeclarationStatus {
    Pending,
    ProofSubmitted,
    Approved,
    Rejected,
}

#[derive(Clone, Debug, PartialEq)]
pub struct Collateral {
    pub asset_code: BytesN<32>,
    pub asset_amount: i128,
}

#[contract]
pub struct DeclarationContract;

#[contractimpl]
impl DeclarationContract {
    pub fn declare(
        env: Env,
        task_description: String,
        asset_code: BytesN<32>,
        asset_amount: i128,
        witness: BytesN<32>,
    ) -> Result<(), RawVal> {
        let declaration = Declaration {
            task_description,
            collateral: Collateral {
                asset_code,
                asset_amount,
            },
            witness,
            status: DeclarationStatus::Pending,
        };

        let declarations = env.storage().instance().get(symbol!("declarations"));
        declarations.push(declaration);

        Ok(())
    }
}

#[test]
fn declare() {
    todo!("this test is not yet implemented")
}
