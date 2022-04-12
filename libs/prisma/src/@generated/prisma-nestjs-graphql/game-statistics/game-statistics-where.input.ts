import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { GameRelationFilter } from '../game/game-relation-filter.input';
import { CurrencyRelationFilter } from '../currency/currency-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameStatisticsWhereInput {

    @Field(() => [GameStatisticsWhereInput], {nullable:true})
    AND?: Array<GameStatisticsWhereInput>;

    @Field(() => [GameStatisticsWhereInput], {nullable:true})
    OR?: Array<GameStatisticsWhereInput>;

    @Field(() => [GameStatisticsWhereInput], {nullable:true})
    NOT?: Array<GameStatisticsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    game_uid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency_uid?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_use?: BoolFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    token_price?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    highest_price?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    highest_yield?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    one_day_up?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    one_day_trading_volum?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    maket_cap?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    fully_diluted_market_cap?: FloatNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    circulation_supply?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    total_supply?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    maximum_sypply?: IntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    price_fluctuating?: JsonNullableFilter;

    @Field(() => GameRelationFilter, {nullable:true})
    game?: GameRelationFilter;

    @Field(() => CurrencyRelationFilter, {nullable:true})
    currency?: CurrencyRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
