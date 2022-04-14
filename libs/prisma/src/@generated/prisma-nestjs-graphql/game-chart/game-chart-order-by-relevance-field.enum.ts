import { registerEnumType } from '@nestjs/graphql';

export enum GameChartOrderByRelevanceFieldEnum {
    uid = "uid",
    game_uid = "game_uid"
}


registerEnumType(GameChartOrderByRelevanceFieldEnum, { name: 'GameChartOrderByRelevanceFieldEnum', description: undefined })
