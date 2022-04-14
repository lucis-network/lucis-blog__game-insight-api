import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameRankingAvgAggregateInput {

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
}
