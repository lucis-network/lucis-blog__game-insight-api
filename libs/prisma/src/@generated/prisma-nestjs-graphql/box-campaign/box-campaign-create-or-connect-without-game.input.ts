import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignCreateWithoutGameInput } from './box-campaign-create-without-game.input';

@InputType()
export class BoxCampaignCreateOrConnectWithoutGameInput {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignCreateWithoutGameInput, {nullable:false})
    create!: BoxCampaignCreateWithoutGameInput;
}
