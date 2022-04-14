import { registerEnumType } from '@nestjs/graphql';

export enum GameRankingOrderByRelevanceFieldEnum {
    game_uid = "game_uid"
}


registerEnumType(GameRankingOrderByRelevanceFieldEnum, { name: 'GameRankingOrderByRelevanceFieldEnum', description: undefined })
