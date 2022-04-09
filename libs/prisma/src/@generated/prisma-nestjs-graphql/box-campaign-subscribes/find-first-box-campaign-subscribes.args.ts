import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereInput } from './box-campaign-subscribes-where.input';
import { BoxCampaignSubscribesOrderByWithRelationAndSearchRelevanceInput } from './box-campaign-subscribes-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignSubscribesScalarFieldEnum } from './box-campaign-subscribes-scalar-field.enum';

@ArgsType()
export class FindFirstBoxCampaignSubscribesArgs {

    @Field(() => BoxCampaignSubscribesWhereInput, {nullable:true})
    where?: BoxCampaignSubscribesWhereInput;

    @Field(() => [BoxCampaignSubscribesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxCampaignSubscribesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:true})
    cursor?: BoxCampaignSubscribesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BoxCampaignSubscribesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BoxCampaignSubscribesScalarFieldEnum>;
}
