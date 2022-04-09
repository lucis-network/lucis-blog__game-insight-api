import { registerEnumType } from '@nestjs/graphql';

export enum UserProfileScalarFieldEnum {
    user_id = "user_id",
    full_name = "full_name",
    twitter = "twitter",
    facebook = "facebook",
    telegram = "telegram",
    discord = "discord",
    phone = "phone",
    avatar = "avatar",
    cover = "cover",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UserProfileScalarFieldEnum, { name: 'UserProfileScalarFieldEnum', description: undefined })
