import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryCreateWithoutBoxInput } from './box-campaign-buy-history-create-without-box.input';
import { BoxCampaignBuyHistoryCreateOrConnectWithoutBoxInput } from './box-campaign-buy-history-create-or-connect-without-box.input';
import { BoxCampaignBuyHistoryUpsertWithWhereUniqueWithoutBoxInput } from './box-campaign-buy-history-upsert-with-where-unique-without-box.input';
import { BoxCampaignBuyHistoryCreateManyBoxInputEnvelope } from './box-campaign-buy-history-create-many-box-input-envelope.input';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';
import { BoxCampaignBuyHistoryUpdateWithWhereUniqueWithoutBoxInput } from './box-campaign-buy-history-update-with-where-unique-without-box.input';
import { BoxCampaignBuyHistoryUpdateManyWithWhereWithoutBoxInput } from './box-campaign-buy-history-update-many-with-where-without-box.input';
import { BoxCampaignBuyHistoryScalarWhereInput } from './box-campaign-buy-history-scalar-where.input';

@InputType()
export class BoxCampaignBuyHistoryUncheckedUpdateManyWithoutBoxInput {

    @Field(() => [BoxCampaignBuyHistoryCreateWithoutBoxInput], {nullable:true})
    create?: Array<BoxCampaignBuyHistoryCreateWithoutBoxInput>;

    @Field(() => [BoxCampaignBuyHistoryCreateOrConnectWithoutBoxInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignBuyHistoryCreateOrConnectWithoutBoxInput>;

    @Field(() => [BoxCampaignBuyHistoryUpsertWithWhereUniqueWithoutBoxInput], {nullable:true})
    upsert?: Array<BoxCampaignBuyHistoryUpsertWithWhereUniqueWithoutBoxInput>;

    @Field(() => BoxCampaignBuyHistoryCreateManyBoxInputEnvelope, {nullable:true})
    createMany?: BoxCampaignBuyHistoryCreateManyBoxInputEnvelope;

    @Field(() => [BoxCampaignBuyHistoryWhereUniqueInput], {nullable:true})
    set?: Array<BoxCampaignBuyHistoryWhereUniqueInput>;

    @Field(() => [BoxCampaignBuyHistoryWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxCampaignBuyHistoryWhereUniqueInput>;

    @Field(() => [BoxCampaignBuyHistoryWhereUniqueInput], {nullable:true})
    delete?: Array<BoxCampaignBuyHistoryWhereUniqueInput>;

    @Field(() => [BoxCampaignBuyHistoryWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignBuyHistoryWhereUniqueInput>;

    @Field(() => [BoxCampaignBuyHistoryUpdateWithWhereUniqueWithoutBoxInput], {nullable:true})
    update?: Array<BoxCampaignBuyHistoryUpdateWithWhereUniqueWithoutBoxInput>;

    @Field(() => [BoxCampaignBuyHistoryUpdateManyWithWhereWithoutBoxInput], {nullable:true})
    updateMany?: Array<BoxCampaignBuyHistoryUpdateManyWithWhereWithoutBoxInput>;

    @Field(() => [BoxCampaignBuyHistoryScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxCampaignBuyHistoryScalarWhereInput>;
}
