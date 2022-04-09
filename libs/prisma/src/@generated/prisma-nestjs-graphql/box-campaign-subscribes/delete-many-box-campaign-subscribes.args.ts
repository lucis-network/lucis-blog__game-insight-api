import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereInput } from './box-campaign-subscribes-where.input';

@ArgsType()
export class DeleteManyBoxCampaignSubscribesArgs {

    @Field(() => BoxCampaignSubscribesWhereInput, {nullable:true})
    where?: BoxCampaignSubscribesWhereInput;
}
