import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameStatisticsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_use?: keyof typeof SortOrder;

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
    price_fluctuating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;
}
