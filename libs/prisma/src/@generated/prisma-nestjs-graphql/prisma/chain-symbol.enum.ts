import { registerEnumType } from '@nestjs/graphql';

export enum ChainSymbol {
    ETH = "ETH",
    BSC = "BSC",
    POLYGON = "POLYGON",
    AVAX = "AVAX",
    FLOW = "FLOW",
    NEAR = "NEAR",
    POLKADOT = "POLKADOT",
    SOLANA = "SOLANA"
}


registerEnumType(ChainSymbol, { name: 'ChainSymbol', description: undefined })
