import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxPriceWhereInput } from './box-price-where.input';
import { BoxPriceOrderByWithAggregationInput } from './box-price-order-by-with-aggregation.input';
import { BoxPriceScalarFieldEnum } from './box-price-scalar-field.enum';
import { BoxPriceScalarWhereWithAggregatesInput } from './box-price-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BoxPriceCountAggregateInput } from './box-price-count-aggregate.input';
import { BoxPriceAvgAggregateInput } from './box-price-avg-aggregate.input';
import { BoxPriceSumAggregateInput } from './box-price-sum-aggregate.input';
import { BoxPriceMinAggregateInput } from './box-price-min-aggregate.input';
import { BoxPriceMaxAggregateInput } from './box-price-max-aggregate.input';

@ArgsType()
export class BoxPriceGroupByArgs {

    @Field(() => BoxPriceWhereInput, {nullable:true})
    where?: BoxPriceWhereInput;

    @Field(() => [BoxPriceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BoxPriceOrderByWithAggregationInput>;

    @Field(() => [BoxPriceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BoxPriceScalarFieldEnum>;

    @Field(() => BoxPriceScalarWhereWithAggregatesInput, {nullable:true})
    having?: BoxPriceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BoxPriceCountAggregateInput, {nullable:true})
    _count?: BoxPriceCountAggregateInput;

    @Field(() => BoxPriceAvgAggregateInput, {nullable:true})
    _avg?: BoxPriceAvgAggregateInput;

    @Field(() => BoxPriceSumAggregateInput, {nullable:true})
    _sum?: BoxPriceSumAggregateInput;

    @Field(() => BoxPriceMinAggregateInput, {nullable:true})
    _min?: BoxPriceMinAggregateInput;

    @Field(() => BoxPriceMaxAggregateInput, {nullable:true})
    _max?: BoxPriceMaxAggregateInput;
}
