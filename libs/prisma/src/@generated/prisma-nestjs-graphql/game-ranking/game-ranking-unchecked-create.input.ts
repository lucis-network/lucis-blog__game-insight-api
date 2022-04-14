import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class GameRankingUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    game_uid?: string;

    @Field(() => Int, {nullable:true})
    rank?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    users?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    change?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    volume?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    market_cap?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    tvl_change?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    mcap_tvl?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
