'use client'

import tw, { styled } from 'twin.macro'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '~/app/_components/ui/navigation-menu'
import { Prose } from '~/app/_components/ui/prose'

export const MenuApp = () => {
	// create/display wallet functionality uncomment if needed
	// const [loading, setLoading] = useState(false);
	// const [wallet, setWallet] = useState({
	// 	publicKey: "",
	// 	secretKey: "",
	// });
	return (
		<Root>
			{/*  create/display wallet functionality uncomment if needed*/}
			{/*{!wallet.publicKey ? (*/}
			{/*	<>*/}
			{/*		/!* new user *!/*/}
			{/*		<button*/}
			{/*			onClick={async () => {*/}
			{/*				const data = await createWallet();*/}
			{/*				setLoading(true);*/}
			{/*				if (data?.source_account) {*/}
			{/*					setWallet({*/}
			{/*						...wallet,*/}
			{/*						publicKey: data.source_account,*/}
			{/*						secretKey: data.secretKey,*/}
			{/*					});*/}
			{/*				}*/}
			{/*				setLoading(false);*/}
			{/*			}}*/}
			{/*			disabled={loading}*/}
			{/*		>*/}
			{/*			Create wallet*/}
			{/*		</button>*/}
			{/*	</>*/}
			{/*) : (*/}
			{/*	<>*/}
			{/*		<div>{wallet.publicKey}</div>*/}
			{/*		<Account wallet={wallet}/>*/}
			{/*	</>*/}
			{/*)}*/}

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/declarations'>
							<Prose>
								<h1 tw='mb-2 md:-mt-4 -mt-2 mr-4 text-6xl'>Arga</h1>
							</Prose>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/declarations/new'>
							New Declaration
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/redemptions'>
							Redemptions
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList>
					<NavigationMenuItem>
						<w3m-button />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</Root>
	)
}

const Root = styled.div`
	${tw`container py-4`}
	${tw`md:flex md:mt-20 max-md:mt-8 max-md:space-y-6`}
	justify-content: space-between;
	align-items: center;
`
