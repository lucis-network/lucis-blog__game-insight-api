import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxTypeCountOrderByAggregateInput } from './box-type-count-order-by-aggregate.input';
import { BoxTypeAvgOrderByAggregateInput } from './box-type-avg-order-by-aggregate.input';
import { BoxTypeMaxOrderByAggregateInput } from './box-type-max-order-by-aggregate.input';
import { BoxTypeMinOrderByAggregateInput } from './box-type-min-order-by-aggregate.input';
import { BoxTypeSumOrderByAggregateInput } from './box-type-sum-order-by-aggregate.input';

@InputType()
export class BoxTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_campaign_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sold_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumb_img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    series_content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    limit_per_user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxTypeCountOrderByAggregateInput, {nullable:true})
    _count?: BoxTypeCountOrderByAggregateInput;

    @Field(() => BoxTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: BoxTypeAvgOrderByAggregateInput;

    @Field(() => BoxTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: BoxTypeMaxOrderByAggregateInput;

    @Field(() => BoxTypeMinOrderByAggregateInput, {nullable:true})
    _min?: BoxTypeMinOrderByAggregateInput;

    @Field(() => BoxTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: BoxTypeSumOrderByAggregateInput;
}
