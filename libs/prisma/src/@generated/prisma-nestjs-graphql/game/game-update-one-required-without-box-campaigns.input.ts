import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutBoxCampaignsInput } from './game-create-without-box-campaigns.input';
import { GameCreateOrConnectWithoutBoxCampaignsInput } from './game-create-or-connect-without-box-campaigns.input';
import { GameUpsertWithoutBoxCampaignsInput } from './game-upsert-without-box-campaigns.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameUpdateWithoutBoxCampaignsInput } from './game-update-without-box-campaigns.input';

@InputType()
export class GameUpdateOneRequiredWithoutBoxCampaignsInput {

    @Field(() => GameCreateWithoutBoxCampaignsInput, {nullable:true})
    create?: GameCreateWithoutBoxCampaignsInput;

    @Field(() => GameCreateOrConnectWithoutBoxCampaignsInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutBoxCampaignsInput;

    @Field(() => GameUpsertWithoutBoxCampaignsInput, {nullable:true})
    upsert?: GameUpsertWithoutBoxCampaignsInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;

    @Field(() => GameUpdateWithoutBoxCampaignsInput, {nullable:true})
    update?: GameUpdateWithoutBoxCampaignsInput;
}
