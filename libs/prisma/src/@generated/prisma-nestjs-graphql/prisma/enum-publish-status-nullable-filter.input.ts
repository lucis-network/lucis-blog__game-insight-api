import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublishStatus } from './publish-status.enum';
import { NestedEnumPublishStatusNullableFilter } from './nested-enum-publish-status-nullable-filter.input';

@InputType()
export class EnumPublishStatusNullableFilter {

    @Field(() => PublishStatus, {nullable:true})
    equals?: keyof typeof PublishStatus;

    @Field(() => [PublishStatus], {nullable:true})
    in?: Array<keyof typeof PublishStatus>;

    @Field(() => [PublishStatus], {nullable:true})
    notIn?: Array<keyof typeof PublishStatus>;

    @Field(() => NestedEnumPublishStatusNullableFilter, {nullable:true})
    not?: NestedEnumPublishStatusNullableFilter;
}
