import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameInsightCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    game_uid?: true;

    @Field(() => Boolean, {nullable:true})
    team_members?: true;

    @Field(() => Boolean, {nullable:true})
    event_imfomation?: true;

    @Field(() => Boolean, {nullable:true})
    weigtht?: true;

    @Field(() => Boolean, {nullable:true})
    deployment_team?: true;

    @Field(() => Boolean, {nullable:true})
    advisor_team?: true;

    @Field(() => Boolean, {nullable:true})
    tech_team?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    innovation?: true;

    @Field(() => Boolean, {nullable:true})
    how_to_play?: true;

    @Field(() => Boolean, {nullable:true})
    sword_mechanism?: true;

    @Field(() => Boolean, {nullable:true})
    conbustion_mechanism?: true;

    @Field(() => Boolean, {nullable:true})
    roadmap_detail?: true;

    @Field(() => Boolean, {nullable:true})
    phase_detail?: true;

    @Field(() => Boolean, {nullable:true})
    technology_used?: true;

    @Field(() => Boolean, {nullable:true})
    compare_other_game?: true;

    @Field(() => Boolean, {nullable:true})
    is_invest?: true;

    @Field(() => Boolean, {nullable:true})
    roi_per_account?: true;

    @Field(() => Boolean, {nullable:true})
    point?: true;

    @Field(() => Boolean, {nullable:true})
    parent?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
