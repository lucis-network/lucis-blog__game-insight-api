import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BoxTypeCountAggregate } from './box-type-count-aggregate.output';
import { BoxTypeAvgAggregate } from './box-type-avg-aggregate.output';
import { BoxTypeSumAggregate } from './box-type-sum-aggregate.output';
import { BoxTypeMinAggregate } from './box-type-min-aggregate.output';
import { BoxTypeMaxAggregate } from './box-type-max-aggregate.output';

@ObjectType()
export class AggregateBoxType {

    @Field(() => BoxTypeCountAggregate, {nullable:true})
    _count?: BoxTypeCountAggregate;

    @Field(() => BoxTypeAvgAggregate, {nullable:true})
    _avg?: BoxTypeAvgAggregate;

    @Field(() => BoxTypeSumAggregate, {nullable:true})
    _sum?: BoxTypeSumAggregate;

    @Field(() => BoxTypeMinAggregate, {nullable:true})
    _min?: BoxTypeMinAggregate;

    @Field(() => BoxTypeMaxAggregate, {nullable:true})
    _max?: BoxTypeMaxAggregate;
}
