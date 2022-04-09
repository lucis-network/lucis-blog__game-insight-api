import { registerEnumType } from '@nestjs/graphql';

export enum GameScalarFieldEnum {
    uid = "uid",
    name = "name",
    desc = "desc",
    desc_team = "desc_team",
    logo = "logo",
    website = "website",
    whitepaper = "whitepaper",
    pitchdeck = "pitchdeck",
    trailer_video = "trailer_video",
    facebook = "facebook",
    twitter = "twitter",
    telegram = "telegram",
    youtube = "youtube",
    discord = "discord",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(GameScalarFieldEnum, { name: 'GameScalarFieldEnum', description: undefined })
