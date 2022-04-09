import { registerEnumType } from '@nestjs/graphql';

export enum BoxContractScalarFieldEnum {
    uid = "uid",
    address = "address",
    owner = "owner",
    chain_symbol = "chain_symbol",
    currency_symbol = "currency_symbol",
    admin_address = "admin_address",
    admin_prv_key = "admin_prv_key",
    is_transfered = "is_transfered",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BoxContractScalarFieldEnum, { name: 'BoxContractScalarFieldEnum', description: undefined })
