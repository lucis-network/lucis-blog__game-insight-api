import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BoxCampaignSubscribesScalarWhereInput {

    @Field(() => [BoxCampaignSubscribesScalarWhereInput], {nullable:true})
    AND?: Array<BoxCampaignSubscribesScalarWhereInput>;

    @Field(() => [BoxCampaignSubscribesScalarWhereInput], {nullable:true})
    OR?: Array<BoxCampaignSubscribesScalarWhereInput>;

    @Field(() => [BoxCampaignSubscribesScalarWhereInput], {nullable:true})
    NOT?: Array<BoxCampaignSubscribesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    box_campaign_uid?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    round?: JsonNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    finish?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    enable_notify?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
