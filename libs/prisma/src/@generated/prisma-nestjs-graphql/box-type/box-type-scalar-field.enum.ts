import { registerEnumType } from '@nestjs/graphql';

export enum BoxTypeScalarFieldEnum {
    uid = "uid",
    box_campaign_uid = "box_campaign_uid",
    name = "name",
    desc = "desc",
    total_amount = "total_amount",
    sold_amount = "sold_amount",
    thumb_img = "thumb_img",
    series_content = "series_content",
    limit_per_user = "limit_per_user",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BoxTypeScalarFieldEnum, { name: 'BoxTypeScalarFieldEnum', description: undefined })
