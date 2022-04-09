import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignUpdateWithoutGameInput } from './box-campaign-update-without-game.input';

@InputType()
export class BoxCampaignUpdateWithWhereUniqueWithoutGameInput {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignUpdateWithoutGameInput, {nullable:false})
    data!: BoxCampaignUpdateWithoutGameInput;
}
