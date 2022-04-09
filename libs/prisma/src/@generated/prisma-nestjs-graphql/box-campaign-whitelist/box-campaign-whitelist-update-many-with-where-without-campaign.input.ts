import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhitelistScalarWhereInput } from './box-campaign-whitelist-scalar-where.input';
import { BoxCampaignWhitelistUpdateManyMutationInput } from './box-campaign-whitelist-update-many-mutation.input';

@InputType()
export class BoxCampaignWhitelistUpdateManyWithWhereWithoutCampaignInput {

    @Field(() => BoxCampaignWhitelistScalarWhereInput, {nullable:false})
    where!: BoxCampaignWhitelistScalarWhereInput;

    @Field(() => BoxCampaignWhitelistUpdateManyMutationInput, {nullable:false})
    data!: BoxCampaignWhitelistUpdateManyMutationInput;
}
