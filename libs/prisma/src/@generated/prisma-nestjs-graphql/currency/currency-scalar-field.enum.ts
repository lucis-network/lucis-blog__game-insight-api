import { registerEnumType } from '@nestjs/graphql';

export enum CurrencyScalarFieldEnum {
    uid = "uid",
    symbol = "symbol",
    name = "name",
    icon = "icon",
    chain_symbol = "chain_symbol",
    address = "address",
    owner = "owner",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(CurrencyScalarFieldEnum, { name: 'CurrencyScalarFieldEnum', description: undefined })
