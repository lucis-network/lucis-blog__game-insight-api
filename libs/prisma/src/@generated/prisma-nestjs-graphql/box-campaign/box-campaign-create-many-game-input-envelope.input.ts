import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateManyGameInput } from './box-campaign-create-many-game.input';

@InputType()
export class BoxCampaignCreateManyGameInputEnvelope {

    @Field(() => [BoxCampaignCreateManyGameInput], {nullable:false})
    data!: Array<BoxCampaignCreateManyGameInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
