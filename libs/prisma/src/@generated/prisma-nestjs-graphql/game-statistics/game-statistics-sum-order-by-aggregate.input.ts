import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameStatisticsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    highest_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    highest_yield?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_day_up?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_day_trading_volum?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maket_cap?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fully_diluted_market_cap?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    circulation_supply?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_supply?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maximum_sypply?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ido?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    no_tokens?: keyof typeof SortOrder;
}
