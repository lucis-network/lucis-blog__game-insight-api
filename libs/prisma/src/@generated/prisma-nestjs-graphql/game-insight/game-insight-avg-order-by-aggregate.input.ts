import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameInsightAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    team_members?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weigtht?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    point?: keyof typeof SortOrder;
}
