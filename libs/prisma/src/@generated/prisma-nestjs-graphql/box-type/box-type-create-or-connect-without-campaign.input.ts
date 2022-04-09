import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { BoxTypeCreateWithoutCampaignInput } from './box-type-create-without-campaign.input';

@InputType()
export class BoxTypeCreateOrConnectWithoutCampaignInput {

    @Field(() => BoxTypeWhereUniqueInput, {nullable:false})
    where!: BoxTypeWhereUniqueInput;

    @Field(() => BoxTypeCreateWithoutCampaignInput, {nullable:false})
    create!: BoxTypeCreateWithoutCampaignInput;
}
