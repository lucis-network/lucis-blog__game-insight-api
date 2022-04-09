import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutBoxCampaignsInput } from './game-create-without-box-campaigns.input';
import { GameCreateOrConnectWithoutBoxCampaignsInput } from './game-create-or-connect-without-box-campaigns.input';
import { GameWhereUniqueInput } from './game-where-unique.input';

@InputType()
export class GameCreateNestedOneWithoutBoxCampaignsInput {

    @Field(() => GameCreateWithoutBoxCampaignsInput, {nullable:true})
    create?: GameCreateWithoutBoxCampaignsInput;

    @Field(() => GameCreateOrConnectWithoutBoxCampaignsInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutBoxCampaignsInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;
}
