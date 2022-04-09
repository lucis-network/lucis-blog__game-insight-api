import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeScalarWhereInput } from './box-type-scalar-where.input';
import { BoxTypeUpdateManyMutationInput } from './box-type-update-many-mutation.input';

@InputType()
export class BoxTypeUpdateManyWithWhereWithoutCampaignInput {

    @Field(() => BoxTypeScalarWhereInput, {nullable:false})
    where!: BoxTypeScalarWhereInput;

    @Field(() => BoxTypeUpdateManyMutationInput, {nullable:false})
    data!: BoxTypeUpdateManyMutationInput;
}
