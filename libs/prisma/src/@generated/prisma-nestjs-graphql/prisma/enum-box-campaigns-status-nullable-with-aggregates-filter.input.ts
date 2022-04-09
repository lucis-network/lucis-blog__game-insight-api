import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignsStatus } from './box-campaigns-status.enum';
import { NestedEnumBoxCampaignsStatusNullableWithAggregatesFilter } from './nested-enum-box-campaigns-status-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumBoxCampaignsStatusNullableFilter } from './nested-enum-box-campaigns-status-nullable-filter.input';

@InputType()
export class EnumBoxCampaignsStatusNullableWithAggregatesFilter {

    @Field(() => BoxCampaignsStatus, {nullable:true})
    equals?: keyof typeof BoxCampaignsStatus;

    @Field(() => [BoxCampaignsStatus], {nullable:true})
    in?: Array<keyof typeof BoxCampaignsStatus>;

    @Field(() => [BoxCampaignsStatus], {nullable:true})
    notIn?: Array<keyof typeof BoxCampaignsStatus>;

    @Field(() => NestedEnumBoxCampaignsStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBoxCampaignsStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumBoxCampaignsStatusNullableFilter, {nullable:true})
    _min?: NestedEnumBoxCampaignsStatusNullableFilter;

    @Field(() => NestedEnumBoxCampaignsStatusNullableFilter, {nullable:true})
    _max?: NestedEnumBoxCampaignsStatusNullableFilter;
}
