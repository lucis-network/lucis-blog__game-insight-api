import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignSubscribesOrderByRelevanceFieldEnum {
    box_campaign_uid = "box_campaign_uid"
}


registerEnumType(BoxCampaignSubscribesOrderByRelevanceFieldEnum, { name: 'BoxCampaignSubscribesOrderByRelevanceFieldEnum', description: undefined })
