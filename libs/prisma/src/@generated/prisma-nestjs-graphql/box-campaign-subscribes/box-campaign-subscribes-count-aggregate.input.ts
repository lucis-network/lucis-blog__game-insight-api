import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BoxCampaignSubscribesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    user_id?: true;

    @Field(() => Boolean, {nullable:true})
    box_campaign_uid?: true;

    @Field(() => Boolean, {nullable:true})
    round?: true;

    @Field(() => Boolean, {nullable:true})
    finish?: true;

    @Field(() => Boolean, {nullable:true})
    enable_notify?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
