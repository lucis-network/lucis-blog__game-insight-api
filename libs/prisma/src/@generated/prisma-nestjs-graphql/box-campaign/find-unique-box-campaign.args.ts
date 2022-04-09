import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';

@ArgsType()
export class FindUniqueBoxCampaignArgs {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;
}