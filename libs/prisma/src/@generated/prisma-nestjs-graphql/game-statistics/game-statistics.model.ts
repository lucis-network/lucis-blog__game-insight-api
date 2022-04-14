import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Game } from '../game/game.model';
import { Currency } from '../currency/currency.model';

@ObjectType()
export class GameStatistics {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    game_uid!: string;

    @Field(() => String, {nullable:false})
    currency_uid!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_use!: boolean;

    @Field(() => Float, {nullable:true})
    token_price!: number | null;

    @Field(() => Float, {nullable:true})
    highest_price!: number | null;

    @Field(() => Float, {nullable:true})
    highest_yield!: number | null;

    @Field(() => Float, {nullable:true})
    one_day_up!: number | null;

    @Field(() => Float, {nullable:true})
    one_day_trading_volum!: number | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    maket_cap!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    fully_diluted_market_cap!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    circulation_supply!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    total_supply!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    maximum_sypply!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    price_fluctuating!: any | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    ido!: any | null;

    @Field(() => Int, {nullable:true})
    no_tokens!: number | null;

    @Field(() => Date, {nullable:true})
    ido_time!: Date | null;

    @Field(() => Game, {nullable:false})
    game?: Game;

    @Field(() => Currency, {nullable:false})
    currency?: Currency;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
