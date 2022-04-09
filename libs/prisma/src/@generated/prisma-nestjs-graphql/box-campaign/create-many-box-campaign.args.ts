import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignCreateManyInput } from './box-campaign-create-many.input';

@ArgsType()
export class CreateManyBoxCampaignArgs {

    @Field(() => [BoxCampaignCreateManyInput], {nullable:false})
    data!: Array<BoxCampaignCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
