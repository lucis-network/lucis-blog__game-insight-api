import { registerEnumType } from '@nestjs/graphql';

export enum GameChartScalarFieldEnum {
    uid = "uid",
    type = "type",
    game_uid = "game_uid",
    series = "series",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(GameChartScalarFieldEnum, { name: 'GameChartScalarFieldEnum', description: undefined })
