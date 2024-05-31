# change actor address
sui client switch --address 0xa3c5f5a89c92e785c3e470f0332d7c263d0299cd548b16a155057a600d929bd8

# make coin first
sui client split-coin --coin-id 0x377fe2ff00e6ead0bca3e372ab6a86d7540824c07b2b27ab0bd9abbc6be3c22e --amounts 100

# make declaration sampl
sui client ptb \
    --assign coin_id @0x77ee93b5f361b67a04c951cb89c549660688f3eca6caec2ec5636bd8076f96e1 \
	--assign witness_address @0xd6ba13bf7da051f63dff1ba741c2d7aac1245011c2a8fef9a3a3e300a46370c4 \
	--move-call 0x95f4638eed86ae22fcdd126261d989071701e8c4d2df3625997de33d448d76bc::arga::declareWithToken '"summary"' '"description"' witness_address 1717093129 1717093129 1717093129 coin_id \
	--gas-budget 20000000

# then, change witness_address
sui client switch --address 0xd6ba13bf7da051f63dff1ba741c2d7aac1245011c2a8fef9a3a3e300a46370c4

# proof
sui client ptb \
    --assign witness_cap @0xaae3fca888a61ff73da7125f8f36ccd37a98ee60a5b1b41cc8c9748015f505c7 \
	--move-call 0x95f4638eed86ae22fcdd126261d989071701e8c4d2df3625997de33d448d76bc::arga::submitDeclarationProof witness_cap 1 \
	--gas-budget 20000000