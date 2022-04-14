import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameStatisticsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    token_price?: true;

    @Field(() => Boolean, {nullable:true})
    highest_price?: true;

    @Field(() => Boolean, {nullable:true})
    highest_yield?: true;

    @Field(() => Boolean, {nullable:true})
    one_day_up?: true;

    @Field(() => Boolean, {nullable:true})
    one_day_trading_volum?: true;

    @Field(() => Boolean, {nullable:true})
    maket_cap?: true;

    @Field(() => Boolean, {nullable:true})
    fully_diluted_market_cap?: true;

    @Field(() => Boolean, {nullable:true})
    circulation_supply?: true;

    @Field(() => Boolean, {nullable:true})
    total_supply?: true;

    @Field(() => Boolean, {nullable:true})
    maximum_sypply?: true;

    @Field(() => Boolean, {nullable:true})
    ido?: true;

    @Field(() => Boolean, {nullable:true})
    no_tokens?: true;
}
