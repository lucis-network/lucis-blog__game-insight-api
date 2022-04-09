import { registerEnumType } from '@nestjs/graphql';

export enum BoxPriceScalarFieldEnum {
    uid = "uid",
    box_type_uid = "box_type_uid",
    currency_uid = "currency_uid",
    price = "price",
    contract_address = "contract_address",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BoxPriceScalarFieldEnum, { name: 'BoxPriceScalarFieldEnum', description: undefined })
