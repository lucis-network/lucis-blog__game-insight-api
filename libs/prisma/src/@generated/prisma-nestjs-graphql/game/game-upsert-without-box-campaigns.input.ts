import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameUpdateWithoutBoxCampaignsInput } from './game-update-without-box-campaigns.input';
import { GameCreateWithoutBoxCampaignsInput } from './game-create-without-box-campaigns.input';

@InputType()
export class GameUpsertWithoutBoxCampaignsInput {

    @Field(() => GameUpdateWithoutBoxCampaignsInput, {nullable:false})
    update!: GameUpdateWithoutBoxCampaignsInput;

    @Field(() => GameCreateWithoutBoxCampaignsInput, {nullable:false})
    create!: GameCreateWithoutBoxCampaignsInput;
}
