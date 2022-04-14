import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameInsightCountOrderByAggregateInput } from './game-insight-count-order-by-aggregate.input';
import { GameInsightAvgOrderByAggregateInput } from './game-insight-avg-order-by-aggregate.input';
import { GameInsightMaxOrderByAggregateInput } from './game-insight-max-order-by-aggregate.input';
import { GameInsightMinOrderByAggregateInput } from './game-insight-min-order-by-aggregate.input';
import { GameInsightSumOrderByAggregateInput } from './game-insight-sum-order-by-aggregate.input';

@InputType()
export class GameInsightOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameInsightCountOrderByAggregateInput, {nullable:true})
    _count?: GameInsightCountOrderByAggregateInput;

    @Field(() => GameInsightAvgOrderByAggregateInput, {nullable:true})
    _avg?: GameInsightAvgOrderByAggregateInput;

    @Field(() => GameInsightMaxOrderByAggregateInput, {nullable:true})
    _max?: GameInsightMaxOrderByAggregateInput;

    @Field(() => GameInsightMinOrderByAggregateInput, {nullable:true})
    _min?: GameInsightMinOrderByAggregateInput;

    @Field(() => GameInsightSumOrderByAggregateInput, {nullable:true})
    _sum?: GameInsightSumOrderByAggregateInput;
}
