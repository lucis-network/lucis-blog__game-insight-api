import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutBuyHistoryInput } from './box-campaign-create-without-buy-history.input';
import { BoxCampaignCreateOrConnectWithoutBuyHistoryInput } from './box-campaign-create-or-connect-without-buy-history.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';

@InputType()
export class BoxCampaignCreateNestedOneWithoutBuyHistoryInput {

    @Field(() => BoxCampaignCreateWithoutBuyHistoryInput, {nullable:true})
    create?: BoxCampaignCreateWithoutBuyHistoryInput;

    @Field(() => BoxCampaignCreateOrConnectWithoutBuyHistoryInput, {nullable:true})
    connectOrCreate?: BoxCampaignCreateOrConnectWithoutBuyHistoryInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    connect?: BoxCampaignWhereUniqueInput;
}
