import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';

@ArgsType()
export class FindUniqueBoxCampaignBuyHistoryArgs {

    @Field(() => BoxCampaignBuyHistoryWhereUniqueInput, {nullable:false})
    where!: BoxCampaignBuyHistoryWhereUniqueInput;
}
