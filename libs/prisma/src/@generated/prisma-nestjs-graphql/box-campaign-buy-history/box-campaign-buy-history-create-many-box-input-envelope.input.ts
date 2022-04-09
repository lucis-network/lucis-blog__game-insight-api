import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryCreateManyBoxInput } from './box-campaign-buy-history-create-many-box.input';

@InputType()
export class BoxCampaignBuyHistoryCreateManyBoxInputEnvelope {

    @Field(() => [BoxCampaignBuyHistoryCreateManyBoxInput], {nullable:false})
    data!: Array<BoxCampaignBuyHistoryCreateManyBoxInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
