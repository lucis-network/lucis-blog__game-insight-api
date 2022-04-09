import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignOrderByRelevanceFieldEnum {
    uid = "uid",
    game_uid = "game_uid",
    name = "name",
    desc = "desc",
    rules = "rules",
    cover_img = "cover_img",
    banner_img = "banner_img",
    highlight = "highlight"
}


registerEnumType(BoxCampaignOrderByRelevanceFieldEnum, { name: 'BoxCampaignOrderByRelevanceFieldEnum', description: undefined })
