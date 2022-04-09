import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoxCampaignWhitelistUser_idBox_campaign_uidCompoundUniqueInput } from './box-campaign-whitelist-user-id-box-campaign-uid-compound-unique.input';

@InputType()
export class BoxCampaignWhitelistWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => BoxCampaignWhitelistUser_idBox_campaign_uidCompoundUniqueInput, {nullable:true})
    user_id_box_campaign_uid?: BoxCampaignWhitelistUser_idBox_campaign_uidCompoundUniqueInput;
}
