import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereInput } from './box-campaign-whitelist-where.input';
import { BoxCampaignWhitelistOrderByWithRelationAndSearchRelevanceInput } from './box-campaign-whitelist-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignWhitelistScalarFieldEnum } from './box-campaign-whitelist-scalar-field.enum';

@ArgsType()
export class FindManyBoxCampaignWhitelistArgs {

    @Field(() => BoxCampaignWhitelistWhereInput, {nullable:true})
    where?: BoxCampaignWhitelistWhereInput;

    @Field(() => [BoxCampaignWhitelistOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxCampaignWhitelistOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxCampaignWhitelistWhereUniqueInput, {nullable:true})
    cursor?: BoxCampaignWhitelistWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BoxCampaignWhitelistScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BoxCampaignWhitelistScalarFieldEnum>;
}
