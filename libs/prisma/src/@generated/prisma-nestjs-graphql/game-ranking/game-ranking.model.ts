import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Game } from '../game/game.model';

@ObjectType()
export class GameRanking {

    @Field(() => ID, {nullable:false})
    game_uid!: string;

    @Field(() => Int, {nullable:true})
    rank!: number | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    users!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    change!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    volume!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    market_cap!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    tvl_change!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    mcap_tvl!: any | null;

    @Field(() => Game, {nullable:true})
    game?: Game | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
