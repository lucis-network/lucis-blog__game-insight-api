import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChainCountAggregate } from './chain-count-aggregate.output';
import { ChainAvgAggregate } from './chain-avg-aggregate.output';
import { ChainSumAggregate } from './chain-sum-aggregate.output';
import { ChainMinAggregate } from './chain-min-aggregate.output';
import { ChainMaxAggregate } from './chain-max-aggregate.output';

@ObjectType()
export class AggregateChain {

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
