import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignCreateWithoutBuyHistoryInput } from './box-campaign-create-without-buy-history.input';

@InputType()
export class BoxCampaignCreateOrConnectWithoutBuyHistoryInput {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignCreateWithoutBuyHistoryInput, {nullable:false})
    create!: BoxCampaignCreateWithoutBuyHistoryInput;
}
