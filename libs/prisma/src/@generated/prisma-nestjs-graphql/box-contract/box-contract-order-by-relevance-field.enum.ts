import { registerEnumType } from '@nestjs/graphql';

export enum BoxContractOrderByRelevanceFieldEnum {
    uid = "uid",
    address = "address",
    owner = "owner",
    currency_symbol = "currency_symbol",
    admin_address = "admin_address",
    admin_prv_key = "admin_prv_key"
}


registerEnumType(BoxContractOrderByRelevanceFieldEnum, { name: 'BoxContractOrderByRelevanceFieldEnum', description: undefined })
