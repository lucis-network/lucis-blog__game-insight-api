import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Game } from '../game/game.model';

@ObjectType()
export class GameRanking {

    @Field(() => ID, {nullable:false})
    game_uid!: string;

    @Field(() => Float, {nullable:true})
    rank!: number | null;

    @Field(() => Float, {nullable:true})
    users!: number | null;

    @Field(() => Float, {nullable:true})
    change!: number | null;

    @Field(() => Float, {nullable:true})
    volume!: number | null;

    @Field(() => Float, {nullable:true})
    market_cap!: number | null;

    @Field(() => Float, {nullable:true})
    tvl_change!: number | null;

    @Field(() => Float, {nullable:true})
    mcap_tvl!: number | null;

    @Field(() => Game, {nullable:true})
    game?: Game | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
