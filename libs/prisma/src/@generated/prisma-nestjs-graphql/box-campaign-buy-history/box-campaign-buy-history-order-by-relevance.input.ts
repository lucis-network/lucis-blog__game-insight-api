import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryOrderByRelevanceFieldEnum } from './box-campaign-buy-history-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxCampaignBuyHistoryOrderByRelevanceInput {

    @Field(() => [BoxCampaignBuyHistoryOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BoxCampaignBuyHistoryOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
