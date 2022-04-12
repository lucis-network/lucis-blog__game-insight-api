import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Game } from '../game/game.model';

@ObjectType()
export class GameInsight {

    @Field(() => ID, {nullable:false})
    game_uid!: string;

    @Field(() => Int, {nullable:true})
    team_members!: number | null;

    @Field(() => String, {nullable:true})
    event_imfomation!: string | null;

    @Field(() => Float, {nullable:true})
    weigtht!: number | null;

    @Field(() => String, {nullable:true})
    deployment_team!: string | null;

    @Field(() => String, {nullable:true})
    advisor_team!: string | null;

    @Field(() => String, {nullable:true})
    tech_team!: string | null;

    @Field(() => String, {nullable:true})
    role!: string | null;

    @Field(() => String, {nullable:true})
    innovation!: string | null;

    @Field(() => String, {nullable:true})
    how_to_play!: string | null;

    @Field(() => String, {nullable:true})
    sword_mechanism!: string | null;

    @Field(() => String, {nullable:true})
    conbustion_mechanism!: string | null;

    @Field(() => String, {nullable:true})
    roadmap_detail!: string | null;

    @Field(() => String, {nullable:true})
    phase_detail!: string | null;

    @Field(() => String, {nullable:true})
    technology_used!: string | null;

    @Field(() => String, {nullable:true})
    compare_other_game!: string | null;

    @Field(() => String, {nullable:true})
    is_invest!: string | null;

    @Field(() => String, {nullable:true})
    roi_per_account!: string | null;

    @Field(() => Int, {nullable:true})
    point!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    parent!: any | null;

    @Field(() => Game, {nullable:false})
    game?: Game;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
