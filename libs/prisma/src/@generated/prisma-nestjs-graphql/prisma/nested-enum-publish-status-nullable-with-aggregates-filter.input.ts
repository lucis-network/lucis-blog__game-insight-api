import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublishStatus } from './publish-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumPublishStatusNullableFilter } from './nested-enum-publish-status-nullable-filter.input';

@InputType()
export class NestedEnumPublishStatusNullableWithAggregatesFilter {

    @Field(() => PublishStatus, {nullable:true})
    equals?: keyof typeof PublishStatus;

    @Field(() => [PublishStatus], {nullable:true})
    in?: Array<keyof typeof PublishStatus>;

    @Field(() => [PublishStatus], {nullable:true})
    notIn?: Array<keyof typeof PublishStatus>;

    @Field(() => NestedEnumPublishStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPublishStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumPublishStatusNullableFilter, {nullable:true})
    _min?: NestedEnumPublishStatusNullableFilter;

    @Field(() => NestedEnumPublishStatusNullableFilter, {nullable:true})
    _max?: NestedEnumPublishStatusNullableFilter;
}
