import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { Int } from '@nestjs/graphql';
import { ChainCountAggregate } from './chain-count-aggregate.output';
import { ChainAvgAggregate } from './chain-avg-aggregate.output';
import { ChainSumAggregate } from './chain-sum-aggregate.output';
import { ChainMinAggregate } from './chain-min-aggregate.output';
import { ChainMaxAggregate } from './chain-max-aggregate.output';

@ObjectType()
export class ChainGroupBy {

    @Field(() => ChainSymbol, {nullable:false})
    symbol!: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => Int, {nullable:true})
    chain_id?: number;

    @Field(() => String, {nullable:true})
    rpc_url?: string;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => ChainCountAggregate, {nullable:true})
    _count?: ChainCountAggregate;

    @Field(() => ChainAvgAggregate, {nullable:true})
    _avg?: ChainAvgAggregate;

    @Field(() => ChainSumAggregate, {nullable:true})
    _sum?: ChainSumAggregate;

    @Field(() => ChainMinAggregate, {nullable:true})
    _min?: ChainMinAggregate;

    @Field(() => ChainMaxAggregate, {nullable:true})
    _max?: ChainMaxAggregate;
}
