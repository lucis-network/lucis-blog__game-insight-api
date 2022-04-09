import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { CurrencyCountAggregate } from './currency-count-aggregate.output';
import { CurrencyMinAggregate } from './currency-min-aggregate.output';
import { CurrencyMaxAggregate } from './currency-max-aggregate.output';

@ObjectType()
export class CurrencyGroupBy {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    symbol!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => ChainSymbol, {nullable:false})
    chain_symbol!: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    owner?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => CurrencyCountAggregate, {nullable:true})
    _count?: CurrencyCountAggregate;

    @Field(() => CurrencyMinAggregate, {nullable:true})
    _min?: CurrencyMinAggregate;

    @Field(() => CurrencyMaxAggregate, {nullable:true})
    _max?: CurrencyMaxAggregate;
}
