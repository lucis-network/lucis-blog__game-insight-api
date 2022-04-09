import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameCountAggregate {

    @Field(() => Int, {nullable:false})
    uid!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    desc!: number;

    @Field(() => Int, {nullable:false})
    desc_team!: number;

    @Field(() => Int, {nullable:false})
    logo!: number;

    @Field(() => Int, {nullable:false})
    website!: number;

    @Field(() => Int, {nullable:false})
    whitepaper!: number;

    @Field(() => Int, {nullable:false})
    pitchdeck!: number;

    @Field(() => Int, {nullable:false})
    trailer_video!: number;

    @Field(() => Int, {nullable:false})
    facebook!: number;

    @Field(() => Int, {nullable:false})
    twitter!: number;

    @Field(() => Int, {nullable:false})
    telegram!: number;

    @Field(() => Int, {nullable:false})
    youtube!: number;

    @Field(() => Int, {nullable:false})
    discord!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
