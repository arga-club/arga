#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Symbol, symbol, Env, BytesN, String, Vec};

#[derive(Clone, Debug, PartialEq, Eq)]
#[contracttype]
pub enum DeclarationStatus {
    Pending,
    ProofSubmitted,
    Approved,
    Rejected,
}

#[derive(Clone, Debug, PartialEq, Eq)]
#[contracttype]
pub struct Collateral {
    pub asset_code: BytesN<32>,
    pub asset_amount: i128,
}

#[derive(Clone, Debug, PartialEq)]
#[contracttype]
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

const DECLARATIONS: Symbol = symbol!("DECLARATIONS");

#[contract]
pub struct DeclarationContract;

#[contractimpl]
impl DeclarationContract {
    pub fn declare(
        env: Env,
        summary: String,
        description: String,
        asset_code: BytesN<32>,
        asset_amount: i128,
        witness: BytesN<32>,
    ) -> Result<(), ()> {
        let declaration = Declaration {
            id: env.storage().get_unchecked(DECLARATIONS).len() as u32,
            status: DeclarationStatus::Pending,
            summary,
            description,
            actor: env.invoker(),
            witness,
            start_date: env.ledger().timestamp(),
            end_date: 0,
            witness_by_date: 0,
            collateral: Collateral {
                asset_code,
                asset_amount,
            },
            proof: String::new(&env),
        };

        let mut declarations = env.storage().get(DECLARATIONS).unwrap_or_else(|| Vec::new(&env));
        declarations.push_back(declaration);
        env.storage().set(DECLARATIONS, &declarations);

        Ok(())
    }
}

#[test]
fn declare() {
    todo!("this test is not yet implemented")
}
