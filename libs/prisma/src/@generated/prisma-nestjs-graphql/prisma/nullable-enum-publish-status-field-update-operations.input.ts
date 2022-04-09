import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublishStatus } from './publish-status.enum';

@InputType()
export class NullableEnumPublishStatusFieldUpdateOperationsInput {

    @Field(() => PublishStatus, {nullable:true})
    set?: keyof typeof PublishStatus;
}
