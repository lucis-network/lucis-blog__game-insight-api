import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignBuyHistoryOrderByRelevanceFieldEnum {
    box_campaign_uid = "box_campaign_uid",
    box_price_uid = "box_price_uid",
    box_type_uid = "box_type_uid",
    tx_hash = "tx_hash",
    data = "data"
}


registerEnumType(BoxCampaignBuyHistoryOrderByRelevanceFieldEnum, { name: 'BoxCampaignBuyHistoryOrderByRelevanceFieldEnum', description: undefined })
