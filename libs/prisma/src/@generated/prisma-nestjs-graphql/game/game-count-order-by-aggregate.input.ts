import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc_team?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whitepaper?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pitchdeck?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trailer_video?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    facebook?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twitter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telegram?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    youtube?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discord?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    road_map?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_team?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;
}
