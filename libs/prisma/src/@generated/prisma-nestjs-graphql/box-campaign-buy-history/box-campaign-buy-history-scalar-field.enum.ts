import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignBuyHistoryScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    box_campaign_uid = "box_campaign_uid",
    round = "round",
    quantity = "quantity",
    box_price_uid = "box_price_uid",
    box_type_uid = "box_type_uid",
    tx_hash = "tx_hash",
    status = "status",
    box_price = "box_price",
    data = "data",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BoxCampaignBuyHistoryScalarFieldEnum, { name: 'BoxCampaignBuyHistoryScalarFieldEnum', description: undefined })
