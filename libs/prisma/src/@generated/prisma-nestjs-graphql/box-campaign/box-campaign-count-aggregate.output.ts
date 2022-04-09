import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxCampaignCountAggregate {

    @Field(() => Int, {nullable:false})
    uid!: number;

    @Field(() => Int, {nullable:false})
    game_uid!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    desc!: number;

    @Field(() => Int, {nullable:false})
    rules!: number;

    @Field(() => Int, {nullable:false})
    cover_img!: number;

    @Field(() => Int, {nullable:false})
    banner_img!: number;

    @Field(() => Int, {nullable:false})
    rounds!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    publish_status!: number;

    @Field(() => Int, {nullable:false})
    opening_at!: number;

    @Field(() => Int, {nullable:false})
    start!: number;

    @Field(() => Int, {nullable:false})
    end!: number;

    @Field(() => Int, {nullable:false})
    highlight!: number;

    @Field(() => Int, {nullable:false})
    spotlight_position!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
