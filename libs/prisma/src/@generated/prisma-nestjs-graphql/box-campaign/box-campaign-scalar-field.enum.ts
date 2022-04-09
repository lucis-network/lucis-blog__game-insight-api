import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignScalarFieldEnum {
    uid = "uid",
    game_uid = "game_uid",
    name = "name",
    desc = "desc",
    rules = "rules",
    cover_img = "cover_img",
    banner_img = "banner_img",
    rounds = "rounds",
    status = "status",
    publish_status = "publish_status",
    opening_at = "opening_at",
    start = "start",
    end = "end",
    highlight = "highlight",
    spotlight_position = "spotlight_position",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BoxCampaignScalarFieldEnum, { name: 'BoxCampaignScalarFieldEnum', description: undefined })
