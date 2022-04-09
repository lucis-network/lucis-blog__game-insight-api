import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BoxCampaignWhitelistUser_idBox_campaign_uidCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;
}
