import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhereInput } from './box-campaign-where.input';
import { BoxCampaignOrderByWithRelationAndSearchRelevanceInput } from './box-campaign-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignScalarFieldEnum } from './box-campaign-scalar-field.enum';

@ArgsType()
export class FindManyBoxCampaignArgs {

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    where?: BoxCampaignWhereInput;

    @Field(() => [BoxCampaignOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxCampaignOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    cursor?: BoxCampaignWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BoxCampaignScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BoxCampaignScalarFieldEnum>;
}
