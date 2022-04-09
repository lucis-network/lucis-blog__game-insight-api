import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoxCampaignListRelationFilter } from '../box-campaign/box-campaign-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameWhereInput {

    @Field(() => [GameWhereInput], {nullable:true})
    AND?: Array<GameWhereInput>;

    @Field(() => [GameWhereInput], {nullable:true})
    OR?: Array<GameWhereInput>;

    @Field(() => [GameWhereInput], {nullable:true})
    NOT?: Array<GameWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    desc?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    desc_team?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    whitepaper?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pitchdeck?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    trailer_video?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    facebook?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    twitter?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telegram?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    youtube?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    discord?: StringNullableFilter;

    @Field(() => BoxCampaignListRelationFilter, {nullable:true})
    boxCampaigns?: BoxCampaignListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
