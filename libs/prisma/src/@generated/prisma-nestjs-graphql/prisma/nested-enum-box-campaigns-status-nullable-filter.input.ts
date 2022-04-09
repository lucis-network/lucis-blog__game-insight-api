import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignsStatus } from './box-campaigns-status.enum';

@InputType()
export class NestedEnumBoxCampaignsStatusNullableFilter {

    @Field(() => BoxCampaignsStatus, {nullable:true})
    equals?: keyof typeof BoxCampaignsStatus;

    @Field(() => [BoxCampaignsStatus], {nullable:true})
    in?: Array<keyof typeof BoxCampaignsStatus>;

    @Field(() => [BoxCampaignsStatus], {nullable:true})
    notIn?: Array<keyof typeof BoxCampaignsStatus>;

    @Field(() => NestedEnumBoxCampaignsStatusNullableFilter, {nullable:true})
    not?: NestedEnumBoxCampaignsStatusNullableFilter;
}
