import { registerEnumType } from '@nestjs/graphql';

export enum CurrencyOrderByRelevanceFieldEnum {
    uid = "uid",
    symbol = "symbol",
    name = "name",
    icon = "icon",
    address = "address",
    owner = "owner"
}


registerEnumType(CurrencyOrderByRelevanceFieldEnum, { name: 'CurrencyOrderByRelevanceFieldEnum', description: undefined })
