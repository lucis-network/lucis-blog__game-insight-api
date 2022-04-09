import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhereInput } from './box-campaign-where.input';

@ArgsType()
export class DeleteManyBoxCampaignArgs {

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    where?: BoxCampaignWhereInput;
}
