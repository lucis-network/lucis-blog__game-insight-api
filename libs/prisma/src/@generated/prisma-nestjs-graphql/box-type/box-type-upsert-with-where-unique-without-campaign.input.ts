import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { BoxTypeUpdateWithoutCampaignInput } from './box-type-update-without-campaign.input';
import { BoxTypeCreateWithoutCampaignInput } from './box-type-create-without-campaign.input';

@InputType()
export class BoxTypeUpsertWithWhereUniqueWithoutCampaignInput {

    @Field(() => BoxTypeWhereUniqueInput, {nullable:false})
    where!: BoxTypeWhereUniqueInput;

    @Field(() => BoxTypeUpdateWithoutCampaignInput, {nullable:false})
    update!: BoxTypeUpdateWithoutCampaignInput;

    @Field(() => BoxTypeCreateWithoutCampaignInput, {nullable:false})
    create!: BoxTypeCreateWithoutCampaignInput;
}
