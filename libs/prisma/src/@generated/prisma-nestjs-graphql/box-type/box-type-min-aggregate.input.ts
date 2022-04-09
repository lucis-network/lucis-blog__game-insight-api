import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BoxTypeMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    uid?: true;

    @Field(() => Boolean, {nullable:true})
    box_campaign_uid?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    desc?: true;

    @Field(() => Boolean, {nullable:true})
    total_amount?: true;

    @Field(() => Boolean, {nullable:true})
    sold_amount?: true;

    @Field(() => Boolean, {nullable:true})
    thumb_img?: true;

    @Field(() => Boolean, {nullable:true})
    series_content?: true;

    @Field(() => Boolean, {nullable:true})
    limit_per_user?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;
}
