import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhitelistOrderByRelevanceFieldEnum } from './box-campaign-whitelist-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxCampaignWhitelistOrderByRelevanceInput {

    @Field(() => [BoxCampaignWhitelistOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BoxCampaignWhitelistOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
