import { useEffect } from "react";
import { useState } from "react";
// eslint-disable-next-line no-restricted-imports
import { getAccount, sendFunds } from "./stellar";
import { Input } from '~/app/_components/ui/input'



const Account = ({ wallet }: {wallet: any}) => {
    const [loading, setLoading] = useState(false);
    const [walletDetails, setWalletDetails] = useState(null);
    const [destination, setDestination] = useState({
        publicKey: "",
        amount: 0,
    });

    const fetchDetails = async () => {
        setLoading(true);
        const data: any = await getAccount(wallet?.publicKey);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (data?.balances) {
            setWalletDetails(data);
        }
        setLoading(false);
    };

    // fetch wallet details
    useEffect(() => {
        fetchDetails();
    }, [wallet]);

    return (
        <div>
            {loading ? (
                <p>Please Wait</p>
            ) : (
                <div>
                    {/* display wallet balances */}
                    <p>Your Balance: {walletDetails?.[0]?.balance} XLM</p>
                    <p>Wallet Address: {wallet?.publicKey}</p>
                    <p>Send Funds</p>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setLoading(true);
                            const sent = await sendFunds(
                                destination?.publicKey,
                                wallet?.secretKey,
                                destination?.amount
                            );
                            // unless an error, transactions always take few seconds / minutes to be completely done
                            setLoading(false);
                            console.log('sending');
                        }}
                    >
                        <Input
                            type="text"
                            name="publicKey"
                            onChange={(e) =>
                                setDestination({
                                    ...destination,
                                    publicKey: e.target.value,
                                })
                            }
                        />
                        <Input
                            type="number"
                            name="amount"
                            onChange={(e) =>
                                setDestination({
                                    ...destination,
                                    amount: e.target.value,
                                })
                            }
                        />
                        <button disabled={loading}>Send Payments</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Account;
