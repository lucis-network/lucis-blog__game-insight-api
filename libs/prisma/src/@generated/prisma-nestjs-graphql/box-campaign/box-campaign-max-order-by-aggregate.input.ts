import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxCampaignMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rules?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cover_img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banner_img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publish_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    opening_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    start?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    end?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    highlight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    spotlight_position?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;
}
