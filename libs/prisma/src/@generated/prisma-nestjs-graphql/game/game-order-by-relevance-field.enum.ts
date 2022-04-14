import { registerEnumType } from '@nestjs/graphql';

export enum GameOrderByRelevanceFieldEnum {
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
    road_map = "road_map",
    game_team = "game_team"
}


registerEnumType(GameOrderByRelevanceFieldEnum, { name: 'GameOrderByRelevanceFieldEnum', description: undefined })
