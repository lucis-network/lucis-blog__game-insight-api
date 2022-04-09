import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignsStatus } from './box-campaigns-status.enum';

@InputType()
export class NullableEnumBoxCampaignsStatusFieldUpdateOperationsInput {

    @Field(() => BoxCampaignsStatus, {nullable:true})
    set?: keyof typeof BoxCampaignsStatus;
}
