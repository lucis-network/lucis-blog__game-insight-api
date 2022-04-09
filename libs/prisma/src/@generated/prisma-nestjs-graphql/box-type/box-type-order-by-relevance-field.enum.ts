import { registerEnumType } from '@nestjs/graphql';

export enum BoxTypeOrderByRelevanceFieldEnum {
    uid = "uid",
    box_campaign_uid = "box_campaign_uid",
    name = "name",
    desc = "desc",
    thumb_img = "thumb_img",
    series_content = "series_content"
}


registerEnumType(BoxTypeOrderByRelevanceFieldEnum, { name: 'BoxTypeOrderByRelevanceFieldEnum', description: undefined })
