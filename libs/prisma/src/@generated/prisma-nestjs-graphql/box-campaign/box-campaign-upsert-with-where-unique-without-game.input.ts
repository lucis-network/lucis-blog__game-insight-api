import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignUpdateWithoutGameInput } from './box-campaign-update-without-game.input';
import { BoxCampaignCreateWithoutGameInput } from './box-campaign-create-without-game.input';

@InputType()
export class BoxCampaignUpsertWithWhereUniqueWithoutGameInput {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignUpdateWithoutGameInput, {nullable:false})
    update!: BoxCampaignUpdateWithoutGameInput;

    @Field(() => BoxCampaignCreateWithoutGameInput, {nullable:false})
    create!: BoxCampaignCreateWithoutGameInput;
}
