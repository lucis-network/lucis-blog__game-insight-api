import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutGameInput } from './box-campaign-create-without-game.input';
import { BoxCampaignCreateOrConnectWithoutGameInput } from './box-campaign-create-or-connect-without-game.input';
import { BoxCampaignUpsertWithWhereUniqueWithoutGameInput } from './box-campaign-upsert-with-where-unique-without-game.input';
import { BoxCampaignCreateManyGameInputEnvelope } from './box-campaign-create-many-game-input-envelope.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignUpdateWithWhereUniqueWithoutGameInput } from './box-campaign-update-with-where-unique-without-game.input';
import { BoxCampaignUpdateManyWithWhereWithoutGameInput } from './box-campaign-update-many-with-where-without-game.input';
import { BoxCampaignScalarWhereInput } from './box-campaign-scalar-where.input';

@InputType()
export class BoxCampaignUpdateManyWithoutGameInput {

    @Field(() => [BoxCampaignCreateWithoutGameInput], {nullable:true})
    create?: Array<BoxCampaignCreateWithoutGameInput>;

    @Field(() => [BoxCampaignCreateOrConnectWithoutGameInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignCreateOrConnectWithoutGameInput>;

    @Field(() => [BoxCampaignUpsertWithWhereUniqueWithoutGameInput], {nullable:true})
    upsert?: Array<BoxCampaignUpsertWithWhereUniqueWithoutGameInput>;

    @Field(() => BoxCampaignCreateManyGameInputEnvelope, {nullable:true})
    createMany?: BoxCampaignCreateManyGameInputEnvelope;

    @Field(() => [BoxCampaignWhereUniqueInput], {nullable:true})
    set?: Array<BoxCampaignWhereUniqueInput>;

    @Field(() => [BoxCampaignWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxCampaignWhereUniqueInput>;

    @Field(() => [BoxCampaignWhereUniqueInput], {nullable:true})
    delete?: Array<BoxCampaignWhereUniqueInput>;

    @Field(() => [BoxCampaignWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignWhereUniqueInput>;

    @Field(() => [BoxCampaignUpdateWithWhereUniqueWithoutGameInput], {nullable:true})
    update?: Array<BoxCampaignUpdateWithWhereUniqueWithoutGameInput>;

    @Field(() => [BoxCampaignUpdateManyWithWhereWithoutGameInput], {nullable:true})
    updateMany?: Array<BoxCampaignUpdateManyWithWhereWithoutGameInput>;

    @Field(() => [BoxCampaignScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxCampaignScalarWhereInput>;
}
