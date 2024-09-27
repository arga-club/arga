import React, { useEffect } from 'react';
import { useSignIn, useProfile, QRCode } from '@farcaster/auth-kit'
import { Button } from '~/app/_components/ui/button'

export const FarcasterSignIn: React.FC = () => {
	const {
		signIn,
		signOut,
		isConnected,
		isSuccess,
		isError,
		error,
		isPolling,
		url,
	} = useSignIn({
		onSuccess: ({ fid, username }) => {
			console.log(`User ${username} (FID: ${fid}) signed in successfully`);
		},
		onError: (err) => {
			console.error('Farcaster sign-in error:', err);
		},
	});

	const { isAuthenticated, profile } = useProfile();

	useEffect(() => {
		if (isConnected && !isPolling && !isSuccess && !isError) {
			signIn();
		}
	}, [isConnected, isPolling, isSuccess, isError, signIn]);

	if (isError) {
		return <div>Error: {error?.message}</div>;
	}

	if (isAuthenticated && profile) {
		return (
			<div>
				<p>Welcome, {profile.username}!</p>
				<p>FID: {profile.fid}</p>
				<Button onClick={signOut}>Sign Out</Button>
			</div>
		);
	}

	return (
		<div>
			{!isPolling ? (
				<Button onClick={() => signIn()}>Sign In with Farcaster</Button>
			) : (
				<div>
					<p>Scan this QR code to sign in:</p>
					{url && (
						<QRCode
							uri={url}
							size={200}
							ecl="M"
						/>
					)}
					<p>Waiting for sign-in...</p>
				</div>
			)}
		</div>
	);
};

