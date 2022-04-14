import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { GameRelationFilter } from '../game/game-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameRankingWhereInput {

    @Field(() => [GameRankingWhereInput], {nullable:true})
    AND?: Array<GameRankingWhereInput>;

    @Field(() => [GameRankingWhereInput], {nullable:true})
    OR?: Array<GameRankingWhereInput>;

    @Field(() => [GameRankingWhereInput], {nullable:true})
    NOT?: Array<GameRankingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_uid?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rank?: IntNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    users?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    change?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    volume?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    market_cap?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    tvl_change?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    mcap_tvl?: DecimalNullableFilter;

    @Field(() => GameRelationFilter, {nullable:true})
    game?: GameRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
