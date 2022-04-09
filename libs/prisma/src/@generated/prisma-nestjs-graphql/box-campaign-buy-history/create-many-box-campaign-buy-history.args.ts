import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryCreateManyInput } from './box-campaign-buy-history-create-many.input';

@ArgsType()
export class CreateManyBoxCampaignBuyHistoryArgs {

    @Field(() => [BoxCampaignBuyHistoryCreateManyInput], {nullable:false})
    data!: Array<BoxCampaignBuyHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
