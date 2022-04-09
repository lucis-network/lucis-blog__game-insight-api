import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { BoxPriceCountAggregate } from './box-price-count-aggregate.output';
import { BoxPriceAvgAggregate } from './box-price-avg-aggregate.output';
import { BoxPriceSumAggregate } from './box-price-sum-aggregate.output';
import { BoxPriceMinAggregate } from './box-price-min-aggregate.output';
import { BoxPriceMaxAggregate } from './box-price-max-aggregate.output';

@ObjectType()
export class BoxPriceGroupBy {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    box_type_uid!: string;

    @Field(() => String, {nullable:false})
    currency_uid!: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: any;

    @Field(() => String, {nullable:true})
    contract_address?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => BoxPriceCountAggregate, {nullable:true})
    _count?: BoxPriceCountAggregate;

    @Field(() => BoxPriceAvgAggregate, {nullable:true})
    _avg?: BoxPriceAvgAggregate;

    @Field(() => BoxPriceSumAggregate, {nullable:true})
    _sum?: BoxPriceSumAggregate;

    @Field(() => BoxPriceMinAggregate, {nullable:true})
    _min?: BoxPriceMinAggregate;

    @Field(() => BoxPriceMaxAggregate, {nullable:true})
    _max?: BoxPriceMaxAggregate;
}
