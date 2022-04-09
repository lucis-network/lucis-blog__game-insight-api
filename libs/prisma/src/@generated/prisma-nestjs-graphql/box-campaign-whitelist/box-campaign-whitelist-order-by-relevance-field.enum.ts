import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignWhitelistOrderByRelevanceFieldEnum {
    box_campaign_uid = "box_campaign_uid"
}


registerEnumType(BoxCampaignWhitelistOrderByRelevanceFieldEnum, { name: 'BoxCampaignWhitelistOrderByRelevanceFieldEnum', description: undefined })
