import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameRankingMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    game_uid?: true;

    @Field(() => Boolean, {nullable:true})
    rank?: true;

    @Field(() => Boolean, {nullable:true})
    users?: true;

    @Field(() => Boolean, {nullable:true})
    change?: true;

    @Field(() => Boolean, {nullable:true})
    volume?: true;

    @Field(() => Boolean, {nullable:true})
    market_cap?: true;

    @Field(() => Boolean, {nullable:true})
    tvl_change?: true;

    @Field(() => Boolean, {nullable:true})
    mcap_tvl?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;
}
