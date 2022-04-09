import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameCreateWithoutBoxCampaignsInput } from './game-create-without-box-campaigns.input';

@InputType()
export class GameCreateOrConnectWithoutBoxCampaignsInput {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateWithoutBoxCampaignsInput, {nullable:false})
    create!: GameCreateWithoutBoxCampaignsInput;
}
