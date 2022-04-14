import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GameChartType } from '../prisma/game-chart-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Game } from '../game/game.model';

@ObjectType()
export class GameChart {

    @Field(() => ID, {nullable:false})
    uid!: string;

    @Field(() => GameChartType, {nullable:false})
    type!: keyof typeof GameChartType;

    @Field(() => String, {nullable:false})
    game_uid!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    series!: any | null;

    @Field(() => Game, {nullable:false})
    game?: Game;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
