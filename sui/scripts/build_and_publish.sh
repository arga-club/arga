# build and publish
sui move build
sui client publish --gas-budget 50000000

# split balance
sui client split-coin --coin-id 0x377fe2ff00e6ead0bca3e372ab6a86d7540824c07b2b27ab0bd9abbc6be3c22e --amounts 100