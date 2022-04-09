import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserProfileCountAggregate } from './user-profile-count-aggregate.output';
import { UserProfileAvgAggregate } from './user-profile-avg-aggregate.output';
import { UserProfileSumAggregate } from './user-profile-sum-aggregate.output';
import { UserProfileMinAggregate } from './user-profile-min-aggregate.output';
import { UserProfileMaxAggregate } from './user-profile-max-aggregate.output';

@ObjectType()
export class AggregateUserProfile {

    @Field(() => UserProfileCountAggregate, {nullable:true})
    _count?: UserProfileCountAggregate;

    @Field(() => UserProfileAvgAggregate, {nullable:true})
    _avg?: UserProfileAvgAggregate;

    @Field(() => UserProfileSumAggregate, {nullable:true})
    _sum?: UserProfileSumAggregate;

    @Field(() => UserProfileMinAggregate, {nullable:true})
    _min?: UserProfileMinAggregate;

    @Field(() => UserProfileMaxAggregate, {nullable:true})
    _max?: UserProfileMaxAggregate;
}
