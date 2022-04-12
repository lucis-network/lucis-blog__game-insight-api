import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class GameInsightCreateWithoutGameInput {

    @Field(() => Int, {nullable:true})
    team_members?: number;

    @Field(() => String, {nullable:true})
    event_imfomation?: string;

    @Field(() => Float, {nullable:true})
    weigtht?: number;

    @Field(() => String, {nullable:true})
    deployment_team?: string;

    @Field(() => String, {nullable:true})
    advisor_team?: string;

    @Field(() => String, {nullable:true})
    tech_team?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    innovation?: string;

    @Field(() => String, {nullable:true})
    how_to_play?: string;

    @Field(() => String, {nullable:true})
    sword_mechanism?: string;

    @Field(() => String, {nullable:true})
    conbustion_mechanism?: string;

    @Field(() => String, {nullable:true})
    roadmap_detail?: string;

    @Field(() => String, {nullable:true})
    phase_detail?: string;

    @Field(() => String, {nullable:true})
    technology_used?: string;

    @Field(() => String, {nullable:true})
    compare_other_game?: string;

    @Field(() => String, {nullable:true})
    is_invest?: string;

    @Field(() => String, {nullable:true})
    roi_per_account?: string;

    @Field(() => Int, {nullable:true})
    point?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    parent?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
