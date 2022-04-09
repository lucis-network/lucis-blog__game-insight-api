import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';

@ArgsType()
export class FindUniqueBoxCampaignSubscribesArgs {

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:false})
    where!: BoxCampaignSubscribesWhereUniqueInput;
}
