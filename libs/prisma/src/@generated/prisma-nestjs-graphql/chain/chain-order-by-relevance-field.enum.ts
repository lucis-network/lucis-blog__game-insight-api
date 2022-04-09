import { registerEnumType } from '@nestjs/graphql';

export enum ChainOrderByRelevanceFieldEnum {
    name = "name",
    icon = "icon",
    rpc_url = "rpc_url"
}


registerEnumType(ChainOrderByRelevanceFieldEnum, { name: 'ChainOrderByRelevanceFieldEnum', description: undefined })
