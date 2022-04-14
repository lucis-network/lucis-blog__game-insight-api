import { registerEnumType } from '@nestjs/graphql';

export enum GameStatisticsScalarFieldEnum {
    id = "id",
    game_uid = "game_uid",
    currency_uid = "currency_uid",
    is_use = "is_use",
    token_price = "token_price",
    highest_price = "highest_price",
    highest_yield = "highest_yield",
    one_day_up = "one_day_up",
    one_day_trading_volum = "one_day_trading_volum",
    maket_cap = "maket_cap",
    fully_diluted_market_cap = "fully_diluted_market_cap",
    circulation_supply = "circulation_supply",
    total_supply = "total_supply",
    maximum_sypply = "maximum_sypply",
    price_fluctuating = "price_fluctuating",
    ido = "ido",
    no_tokens = "no_tokens",
    ido_time = "ido_time",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(GameStatisticsScalarFieldEnum, { name: 'GameStatisticsScalarFieldEnum', description: undefined })
