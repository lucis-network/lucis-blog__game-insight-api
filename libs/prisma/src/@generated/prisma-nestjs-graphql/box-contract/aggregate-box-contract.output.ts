import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BoxContractCountAggregate } from './box-contract-count-aggregate.output';
import { BoxContractMinAggregate } from './box-contract-min-aggregate.output';
import { BoxContractMaxAggregate } from './box-contract-max-aggregate.output';

@ObjectType()
export class AggregateBoxContract {

    @Field(() => BoxContractCountAggregate, {nullable:true})
    _count?: BoxContractCountAggregate;

    @Field(() => BoxContractMinAggregate, {nullable:true})
    _min?: BoxContractMinAggregate;

    @Field(() => BoxContractMaxAggregate, {nullable:true})
    _max?: BoxContractMaxAggregate;
}
