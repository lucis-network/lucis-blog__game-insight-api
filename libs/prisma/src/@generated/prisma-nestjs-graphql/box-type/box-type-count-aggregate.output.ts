import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxTypeCountAggregate {

    @Field(() => Int, {nullable:false})
    uid!: number;

    @Field(() => Int, {nullable:false})
    box_campaign_uid!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    desc!: number;

    @Field(() => Int, {nullable:false})
    total_amount!: number;

    @Field(() => Int, {nullable:false})
    sold_amount!: number;

    @Field(() => Int, {nullable:false})
    thumb_img!: number;

    @Field(() => Int, {nullable:false})
    series_content!: number;

    @Field(() => Int, {nullable:false})
    limit_per_user!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
