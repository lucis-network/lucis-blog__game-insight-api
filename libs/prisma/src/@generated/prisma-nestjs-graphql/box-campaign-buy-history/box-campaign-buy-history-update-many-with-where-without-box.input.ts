import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryScalarWhereInput } from './box-campaign-buy-history-scalar-where.input';
import { BoxCampaignBuyHistoryUpdateManyMutationInput } from './box-campaign-buy-history-update-many-mutation.input';

@InputType()
export class BoxCampaignBuyHistoryUpdateManyWithWhereWithoutBoxInput {

    @Field(() => BoxCampaignBuyHistoryScalarWhereInput, {nullable:false})
    where!: BoxCampaignBuyHistoryScalarWhereInput;

    @Field(() => BoxCampaignBuyHistoryUpdateManyMutationInput, {nullable:false})
    data!: BoxCampaignBuyHistoryUpdateManyMutationInput;
}
