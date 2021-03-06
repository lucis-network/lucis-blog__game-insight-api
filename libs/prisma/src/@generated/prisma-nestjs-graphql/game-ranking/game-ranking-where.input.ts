import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
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

    @Field(() => FloatNullableFilter, {nullable:true})
    rank?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    users?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    change?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    volume?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    market_cap?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    tvl_change?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    mcap_tvl?: FloatNullableFilter;

    @Field(() => GameRelationFilter, {nullable:true})
    game?: GameRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
