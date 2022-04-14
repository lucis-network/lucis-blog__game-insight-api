import { registerEnumType } from '@nestjs/graphql';

export enum GameStatisticsOrderByRelevanceFieldEnum {
    game_uid = "game_uid",
    currency_uid = "currency_uid"
}


registerEnumType(GameStatisticsOrderByRelevanceFieldEnum, { name: 'GameStatisticsOrderByRelevanceFieldEnum', description: undefined })
