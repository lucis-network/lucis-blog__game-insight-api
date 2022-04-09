import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesOrderByRelevanceFieldEnum } from './box-campaign-subscribes-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxCampaignSubscribesOrderByRelevanceInput {

    @Field(() => [BoxCampaignSubscribesOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BoxCampaignSubscribesOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
