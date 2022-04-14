import { registerEnumType } from '@nestjs/graphql';

export enum GameChartType {
    USERS = "USERS",
    CHANGES = "CHANGES",
    VOLUME = "VOLUME",
    TVL = "TVL",
    MCAP = "MCAP",
    MARKETCAP = "MARKETCAP",
    BALANCE = "BALANCE"
}


registerEnumType(GameChartType, { name: 'GameChartType', description: undefined })
