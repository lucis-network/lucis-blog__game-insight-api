import { registerEnumType } from '@nestjs/graphql';

export enum ChainScalarFieldEnum {
    symbol = "symbol",
    name = "name",
    icon = "icon",
    chain_id = "chain_id",
    rpc_url = "rpc_url",
    status = "status",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ChainScalarFieldEnum, { name: 'ChainScalarFieldEnum', description: undefined })
