import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CurrencyCountAggregate } from './currency-count-aggregate.output';
import { CurrencyMinAggregate } from './currency-min-aggregate.output';
import { CurrencyMaxAggregate } from './currency-max-aggregate.output';

@ObjectType()
export class AggregateCurrency {

    @Field(() => CurrencyCountAggregate, {nullable:true})
    _count?: CurrencyCountAggregate;

    @Field(() => CurrencyMinAggregate, {nullable:true})
    _min?: CurrencyMinAggregate;

    @Field(() => CurrencyMaxAggregate, {nullable:true})
    _max?: CurrencyMaxAggregate;
}
