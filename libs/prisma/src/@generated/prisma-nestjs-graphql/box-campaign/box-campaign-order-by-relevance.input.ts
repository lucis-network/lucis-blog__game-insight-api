import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignOrderByRelevanceFieldEnum } from './box-campaign-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxCampaignOrderByRelevanceInput {

    @Field(() => [BoxCampaignOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BoxCampaignOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
