import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameOrderByWithRelationAndSearchRelevanceInput } from '../game/game-order-by-with-relation-and-search-relevance.input';
import { GameInsightOrderByRelevanceInput } from './game-insight-order-by-relevance.input';

@InputType()
export class GameInsightOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    game_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    team_members?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    event_imfomation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weigtht?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deployment_team?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    advisor_team?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tech_team?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    innovation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    how_to_play?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sword_mechanism?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    conbustion_mechanism?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roadmap_detail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phase_detail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    technology_used?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    compare_other_game?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_invest?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roi_per_account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    point?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parent?: keyof typeof SortOrder;

    @Field(() => GameOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    game?: GameOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameInsightOrderByRelevanceInput, {nullable:true})
    _relevance?: GameInsightOrderByRelevanceInput;
}
