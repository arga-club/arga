# change actor address
sui client switch --address 0xa3c5f5a89c92e785c3e470f0332d7c263d0299cd548b16a155057a600d929bd8

# make coin first
sui client split-coin --coin-id 0x377fe2ff00e6ead0bca3e372ab6a86d7540824c07b2b27ab0bd9abbc6be3c22e --amounts 100

# make declaration sampl
sui client ptb \
    --assign coin_id @0x8801549a67d3e30661ff11c2de1ce71afbfb9eebec680028976372dc344d60e9 \
	--assign witness_address @0xd6ba13bf7da051f63dff1ba741c2d7aac1245011c2a8fef9a3a3e300a46370c4 \
	--move-call 0x95f4638eed86ae22fcdd126261d989071701e8c4d2df3625997de33d448d76bc::arga::declareWithToken '"summary"' '"description"' witness_address 1717093129 1717093129 1717093129 coin_id \
	--gas-budget 20000000

# then, change witness_address
sui client switch --address 0xd6ba13bf7da051f63dff1ba741c2d7aac1245011c2a8fef9a3a3e300a46370c4

# proof
sui client ptb \
    --assign witness_cap @0x13b5c53334a7889041b93474824c99a6cb3c6bc573a4e7b5ec96f763f8e3e9cb \
	--move-call 0x95f4638eed86ae22fcdd126261d989071701e8c4d2df3625997de33d448d76bc::arga::submitDeclarationProof witness_cap 11u8 \
	--gas-budget 20000000