import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeCreateManyCampaignInput } from './box-type-create-many-campaign.input';

@InputType()
export class BoxTypeCreateManyCampaignInputEnvelope {

    @Field(() => [BoxTypeCreateManyCampaignInput], {nullable:false})
    data!: Array<BoxTypeCreateManyCampaignInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
