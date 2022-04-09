import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserProfileCountAggregate } from './user-profile-count-aggregate.output';
import { UserProfileAvgAggregate } from './user-profile-avg-aggregate.output';
import { UserProfileSumAggregate } from './user-profile-sum-aggregate.output';
import { UserProfileMinAggregate } from './user-profile-min-aggregate.output';
import { UserProfileMaxAggregate } from './user-profile-max-aggregate.output';

@ObjectType()
export class UserProfileGroupBy {

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:true})
    full_name?: string;

    @Field(() => String, {nullable:true})
    twitter?: string;

    @Field(() => String, {nullable:true})
    facebook?: string;

    @Field(() => String, {nullable:true})
    telegram?: string;

    @Field(() => String, {nullable:true})
    discord?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    cover?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

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
