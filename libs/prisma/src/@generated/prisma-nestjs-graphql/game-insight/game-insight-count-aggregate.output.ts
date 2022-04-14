import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameInsightCountAggregate {

    @Field(() => Int, {nullable:false})
    game_uid!: number;

    @Field(() => Int, {nullable:false})
    team_members!: number;

    @Field(() => Int, {nullable:false})
    event_imfomation!: number;

    @Field(() => Int, {nullable:false})
    weigtht!: number;

    @Field(() => Int, {nullable:false})
    deployment_team!: number;

    @Field(() => Int, {nullable:false})
    advisor_team!: number;

    @Field(() => Int, {nullable:false})
    tech_team!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    innovation!: number;

    @Field(() => Int, {nullable:false})
    how_to_play!: number;

    @Field(() => Int, {nullable:false})
    sword_mechanism!: number;

    @Field(() => Int, {nullable:false})
    conbustion_mechanism!: number;

    @Field(() => Int, {nullable:false})
    roadmap_detail!: number;

    @Field(() => Int, {nullable:false})
    phase_detail!: number;

    @Field(() => Int, {nullable:false})
    technology_used!: number;

    @Field(() => Int, {nullable:false})
    compare_other_game!: number;

    @Field(() => Int, {nullable:false})
    is_invest!: number;

    @Field(() => Int, {nullable:false})
    roi_per_account!: number;

    @Field(() => Int, {nullable:false})
    point!: number;

    @Field(() => Int, {nullable:false})
    parent!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
