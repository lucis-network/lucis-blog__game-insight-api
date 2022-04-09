import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BoxCampaignWhitelistScalarWhereInput {

    @Field(() => [BoxCampaignWhitelistScalarWhereInput], {nullable:true})
    AND?: Array<BoxCampaignWhitelistScalarWhereInput>;

    @Field(() => [BoxCampaignWhitelistScalarWhereInput], {nullable:true})
    OR?: Array<BoxCampaignWhitelistScalarWhereInput>;

    @Field(() => [BoxCampaignWhitelistScalarWhereInput], {nullable:true})
    NOT?: Array<BoxCampaignWhitelistScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    box_campaign_uid?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
