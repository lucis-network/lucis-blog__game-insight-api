import { registerEnumType } from '@nestjs/graphql';

export enum GameChartType {
    USERS = "USERS",
    CHANGES = "CHANGES",
    VOLUME = "VOLUME",
    TVL = "TVL",
    MCAP = "MCAP"
}


registerEnumType(GameChartType, { name: 'GameChartType', description: undefined })
