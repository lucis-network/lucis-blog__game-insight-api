import { registerEnumType } from '@nestjs/graphql';

export enum BoxPriceOrderByRelevanceFieldEnum {
    uid = "uid",
    box_type_uid = "box_type_uid",
    currency_uid = "currency_uid",
    contract_address = "contract_address"
}


registerEnumType(BoxPriceOrderByRelevanceFieldEnum, { name: 'BoxPriceOrderByRelevanceFieldEnum', description: undefined })
