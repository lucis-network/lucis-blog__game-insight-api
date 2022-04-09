import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignSubscribesScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    box_campaign_uid = "box_campaign_uid",
    round = "round",
    finish = "finish",
    enable_notify = "enable_notify",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BoxCampaignSubscribesScalarFieldEnum, { name: 'BoxCampaignSubscribesScalarFieldEnum', description: undefined })
