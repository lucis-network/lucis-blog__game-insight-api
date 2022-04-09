import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereInput } from './box-campaign-buy-history-where.input';
import { BoxCampaignBuyHistoryOrderByWithRelationAndSearchRelevanceInput } from './box-campaign-buy-history-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryScalarFieldEnum } from './box-campaign-buy-history-scalar-field.enum';

@ArgsType()
export class FindFirstBoxCampaignBuyHistoryArgs {

    @Field(() => BoxCampaignBuyHistoryWhereInput, {nullable:true})
    where?: BoxCampaignBuyHistoryWhereInput;

    @Field(() => [BoxCampaignBuyHistoryOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxCampaignBuyHistoryOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxCampaignBuyHistoryWhereUniqueInput, {nullable:true})
    cursor?: BoxCampaignBuyHistoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BoxCampaignBuyHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BoxCampaignBuyHistoryScalarFieldEnum>;
}
