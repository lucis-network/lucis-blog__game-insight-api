import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCreateManyBox_campaignInput } from './box-campaign-subscribes-create-many-box-campaign.input';

@InputType()
export class BoxCampaignSubscribesCreateManyBox_campaignInputEnvelope {

    @Field(() => [BoxCampaignSubscribesCreateManyBox_campaignInput], {nullable:false})
    data!: Array<BoxCampaignSubscribesCreateManyBox_campaignInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
