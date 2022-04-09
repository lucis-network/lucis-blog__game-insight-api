import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { BoxTypeUpdateWithoutCampaignInput } from './box-type-update-without-campaign.input';

@InputType()
export class BoxTypeUpdateWithWhereUniqueWithoutCampaignInput {

    @Field(() => BoxTypeWhereUniqueInput, {nullable:false})
    where!: BoxTypeWhereUniqueInput;

    @Field(() => BoxTypeUpdateWithoutCampaignInput, {nullable:false})
    data!: BoxTypeUpdateWithoutCampaignInput;
}
