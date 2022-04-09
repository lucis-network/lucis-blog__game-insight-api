import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutBuyHistoryInput } from './box-campaign-create-without-buy-history.input';
import { BoxCampaignCreateOrConnectWithoutBuyHistoryInput } from './box-campaign-create-or-connect-without-buy-history.input';
import { BoxCampaignUpsertWithoutBuyHistoryInput } from './box-campaign-upsert-without-buy-history.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignUpdateWithoutBuyHistoryInput } from './box-campaign-update-without-buy-history.input';

@InputType()
export class BoxCampaignUpdateOneRequiredWithoutBuyHistoryInput {

    @Field(() => BoxCampaignCreateWithoutBuyHistoryInput, {nullable:true})
    create?: BoxCampaignCreateWithoutBuyHistoryInput;

    @Field(() => BoxCampaignCreateOrConnectWithoutBuyHistoryInput, {nullable:true})
    connectOrCreate?: BoxCampaignCreateOrConnectWithoutBuyHistoryInput;

    @Field(() => BoxCampaignUpsertWithoutBuyHistoryInput, {nullable:true})
    upsert?: BoxCampaignUpsertWithoutBuyHistoryInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    connect?: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignUpdateWithoutBuyHistoryInput, {nullable:true})
    update?: BoxCampaignUpdateWithoutBuyHistoryInput;
}
