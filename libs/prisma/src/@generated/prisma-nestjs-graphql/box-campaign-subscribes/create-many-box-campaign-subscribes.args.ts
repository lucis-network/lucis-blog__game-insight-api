import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCreateManyInput } from './box-campaign-subscribes-create-many.input';

@ArgsType()
export class CreateManyBoxCampaignSubscribesArgs {

    @Field(() => [BoxCampaignSubscribesCreateManyInput], {nullable:false})
    data!: Array<BoxCampaignSubscribesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
