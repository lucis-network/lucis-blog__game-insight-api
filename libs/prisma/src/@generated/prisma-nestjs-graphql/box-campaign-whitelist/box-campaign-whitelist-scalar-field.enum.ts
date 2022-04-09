import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignWhitelistScalarFieldEnum {
    id = "id",
    box_campaign_uid = "box_campaign_uid",
    user_id = "user_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BoxCampaignWhitelistScalarFieldEnum, { name: 'BoxCampaignWhitelistScalarFieldEnum', description: undefined })
