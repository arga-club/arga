// Probably can use stellarSDK without typescript-wallet-sdk and can remove it after
import {StellarConfiguration, Wallet} from "@stellar/typescript-wallet-sdk";
import {Asset, BASE_FEE, Keypair, Memo, Networks, NotFoundError, Operation, TransactionBuilder} from "stellar-sdk";

// const destination = Keypair.random()
//
// destination.publicKey()
// destination.secret()

export async function createWallet() {
    const wallet = new Wallet({
        stellarConfiguration: StellarConfiguration.TestNet(),
    });
    const account = wallet.stellar().account();

    const accountKeyPair = account.createKeypair();

    try {
        const response = await fetch(
            `https://friendbot.stellar.org?addr=${encodeURIComponent(accountKeyPair.publicKey)}`
        );
        const data = await response.json();
        debugger
        return {
          ...data,
            secretKey: accountKeyPair.secretKey
    }
    } catch (e) {
        return e;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// destinationID - smart contractor
export async function sendFunds(destinationID, secretKey, amount: number) {
    try {
        const wallet = new Wallet({
            stellarConfiguration: StellarConfiguration.TestNet(),
        });
        const sourceKeys = Keypair.fromSecret(secretKey);
        let transaction;
        const server = wallet.stellar().server
        server
            // checks if destination account exists
            .loadAccount(destinationID)
            // If the account is not found, surface a nicer error message for logging.
            .catch(function (error) {
                if (error instanceof NotFoundError) {
                    throw new Error("The destination account does not exist!");
                } else return error;
            })
            // If there was no error, load up-to-date information on your account.
            .then(function () {
                return server.loadAccount(sourceKeys.publicKey());
            })
            .then(function (sourceAccount) {
                // Start building the transaction.
                transaction = new TransactionBuilder(sourceAccount, {
                    fee: BASE_FEE,
                    networkPassphrase: Networks.TESTNET,
                })
                    .addOperation(
                        Operation.payment({
                            destination: destinationID,
                            // Because Stellar allows transaction in many currencies, you must
                            // specify the asset type. The special "native" asset represents Lumens.
                            asset: Asset.native(),
                            amount: amount.toString(),
                        })
                    )
                    // A memo allows you to add your own metadata to a transaction. It's
                    // optional and does not affect how Stellar treats the transaction.
                    .addMemo(Memo.text("Test Transaction"))
                    // Wait a maximum of three minutes for the transaction
                    .setTimeout(180)
                    .build();
                // Sign the transaction to prove you are actually the person sending it.
                transaction.sign(sourceKeys);
                // And finally, send it off to Stellar!
                return server.submitTransaction(transaction);
            })
            .then(function (result) {
                return result;
            })
            .catch(function (error) {
                // If the result is unknown (no response body, timeout etc.) we simply resubmit
                // already built transaction:
                // server.submitTransaction(transaction);
                return error;
            });
    } catch (error) {
        return error;
    }
}


// get wallet details
export async function getAccount(publicKey: string) {
    const wallet = new Wallet({
        stellarConfiguration: StellarConfiguration.TestNet(),
    });

    const server = wallet.stellar().server

    try {
        return await server.accounts().accountId(publicKey).call();
    } catch (error) {
        return error;
    }
}
