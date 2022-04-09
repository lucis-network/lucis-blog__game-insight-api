import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutGameInput } from './box-campaign-create-without-game.input';
import { BoxCampaignCreateOrConnectWithoutGameInput } from './box-campaign-create-or-connect-without-game.input';
import { BoxCampaignCreateManyGameInputEnvelope } from './box-campaign-create-many-game-input-envelope.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';

@InputType()
export class BoxCampaignCreateNestedManyWithoutGameInput {

    @Field(() => [BoxCampaignCreateWithoutGameInput], {nullable:true})
    create?: Array<BoxCampaignCreateWithoutGameInput>;

    @Field(() => [BoxCampaignCreateOrConnectWithoutGameInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignCreateOrConnectWithoutGameInput>;

    @Field(() => BoxCampaignCreateManyGameInputEnvelope, {nullable:true})
    createMany?: BoxCampaignCreateManyGameInputEnvelope;

    @Field(() => [BoxCampaignWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignWhereUniqueInput>;
}
