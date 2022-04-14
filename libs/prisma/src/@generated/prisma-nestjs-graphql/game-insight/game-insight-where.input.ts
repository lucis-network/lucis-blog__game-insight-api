import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { GameRelationFilter } from '../game/game-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameInsightWhereInput {

    @Field(() => [GameInsightWhereInput], {nullable:true})
    AND?: Array<GameInsightWhereInput>;

    @Field(() => [GameInsightWhereInput], {nullable:true})
    OR?: Array<GameInsightWhereInput>;

    @Field(() => [GameInsightWhereInput], {nullable:true})
    NOT?: Array<GameInsightWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_uid?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    team_members?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    event_imfomation?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    weigtht?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deployment_team?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    advisor_team?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tech_team?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    role?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    innovation?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    how_to_play?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sword_mechanism?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    conbustion_mechanism?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    roadmap_detail?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phase_detail?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    technology_used?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    compare_other_game?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    is_invest?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    roi_per_account?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    point?: IntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    parent?: JsonNullableFilter;

    @Field(() => GameRelationFilter, {nullable:true})
    game?: GameRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
