import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignCreateNestedOneWithoutSubscribeCampaignInput } from '../box-campaign/box-campaign-create-nested-one-without-subscribe-campaign.input';

@InputType()
export class BoxCampaignSubscribesCreateWithoutUserInput {

    @Field(() => GraphQLJSON, {nullable:true})
    round?: any;

    @Field(() => Boolean, {nullable:true})
    finish?: boolean;

    @Field(() => Boolean, {nullable:true})
    enable_notify?: boolean;

    @Field(() => BoxCampaignCreateNestedOneWithoutSubscribeCampaignInput, {nullable:false})
    box_campaign!: BoxCampaignCreateNestedOneWithoutSubscribeCampaignInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
