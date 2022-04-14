import { registerEnumType } from '@nestjs/graphql';

export enum GameRankingScalarFieldEnum {
    game_uid = "game_uid",
    rank = "rank",
    users = "users",
    change = "change",
    volume = "volume",
    market_cap = "market_cap",
    tvl_change = "tvl_change",
    mcap_tvl = "mcap_tvl",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(GameRankingScalarFieldEnum, { name: 'GameRankingScalarFieldEnum', description: undefined })
