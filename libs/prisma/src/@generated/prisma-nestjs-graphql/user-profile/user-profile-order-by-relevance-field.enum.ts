import { registerEnumType } from '@nestjs/graphql';

export enum UserProfileOrderByRelevanceFieldEnum {
    full_name = "full_name",
    twitter = "twitter",
    facebook = "facebook",
    telegram = "telegram",
    discord = "discord",
    phone = "phone",
    avatar = "avatar",
    cover = "cover"
}


registerEnumType(UserProfileOrderByRelevanceFieldEnum, { name: 'UserProfileOrderByRelevanceFieldEnum', description: undefined })
