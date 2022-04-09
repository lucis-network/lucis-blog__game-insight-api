import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryCreateWithoutBoxInput } from './box-campaign-buy-history-create-without-box.input';
import { BoxCampaignBuyHistoryCreateOrConnectWithoutBoxInput } from './box-campaign-buy-history-create-or-connect-without-box.input';
import { BoxCampaignBuyHistoryCreateManyBoxInputEnvelope } from './box-campaign-buy-history-create-many-box-input-envelope.input';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';

@InputType()
export class BoxCampaignBuyHistoryCreateNestedManyWithoutBoxInput {

    @Field(() => [BoxCampaignBuyHistoryCreateWithoutBoxInput], {nullable:true})
    create?: Array<BoxCampaignBuyHistoryCreateWithoutBoxInput>;

    @Field(() => [BoxCampaignBuyHistoryCreateOrConnectWithoutBoxInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignBuyHistoryCreateOrConnectWithoutBoxInput>;

    @Field(() => BoxCampaignBuyHistoryCreateManyBoxInputEnvelope, {nullable:true})
    createMany?: BoxCampaignBuyHistoryCreateManyBoxInputEnvelope;

    @Field(() => [BoxCampaignBuyHistoryWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignBuyHistoryWhereUniqueInput>;
}
