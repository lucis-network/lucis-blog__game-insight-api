import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxTypeMaxOrderByAggregateInput {

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
}
