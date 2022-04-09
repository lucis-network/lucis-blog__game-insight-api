import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxTypeMinAggregate {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    box_campaign_uid?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @Field(() => Int, {nullable:true})
    total_amount?: number;

    @Field(() => Int, {nullable:true})
    sold_amount?: number;

    @Field(() => String, {nullable:true})
    thumb_img?: string;

    @Field(() => String, {nullable:true})
    series_content?: string;

    @Field(() => Int, {nullable:true})
    limit_per_user?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
