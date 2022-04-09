import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistCreateManyInput } from './box-campaign-whitelist-create-many.input';

@ArgsType()
export class CreateManyBoxCampaignWhitelistArgs {

    @Field(() => [BoxCampaignWhitelistCreateManyInput], {nullable:false})
    data!: Array<BoxCampaignWhitelistCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
