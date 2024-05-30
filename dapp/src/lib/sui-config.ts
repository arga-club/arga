import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';

const rpcUrl = getFullnodeUrl('testnet');

export const suiClient = new SuiClient({ url: rpcUrl });

// Function to subscribe to transactions
export async function subscribeToTransactions() {
    return await suiClient.subscribeTransaction({
        filter: {
            FromAddress: '<SUI_ADDRESS>',
        },
        onMessage(event) {
            console.log('received sui message: ' + event);
        },
    });
}

// Function to get balance
export async function getBalance(address: string) {
    const balanceData = await suiClient.getBalance({
        owner: address,
    });
    return {
        totalBalance: Number(balanceData.totalBalance),
    };
}

export function shortenAddress(address: string): string {
    if (address.length > 10) {
        return `${address.slice(0, 5)}...${address.slice(-4)}`;
    }
    return address;
}

export function formatSuiBalance(balance: number): string {
    const formattedBalance = balance / Math.pow(10, 9);
    return `${formattedBalance.toFixed(2)}`;
}
