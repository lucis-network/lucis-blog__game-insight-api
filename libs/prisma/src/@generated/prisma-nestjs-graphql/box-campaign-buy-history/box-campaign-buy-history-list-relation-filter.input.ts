import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereInput } from './box-campaign-buy-history-where.input';

@InputType()
export class BoxCampaignBuyHistoryListRelationFilter {

    @Field(() => BoxCampaignBuyHistoryWhereInput, {nullable:true})
    every?: BoxCampaignBuyHistoryWhereInput;

    @Field(() => BoxCampaignBuyHistoryWhereInput, {nullable:true})
    some?: BoxCampaignBuyHistoryWhereInput;

    @Field(() => BoxCampaignBuyHistoryWhereInput, {nullable:true})
    none?: BoxCampaignBuyHistoryWhereInput;
}
