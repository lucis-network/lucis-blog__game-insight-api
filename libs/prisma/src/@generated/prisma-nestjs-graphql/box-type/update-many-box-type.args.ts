import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeUpdateManyMutationInput } from './box-type-update-many-mutation.input';
import { BoxTypeWhereInput } from './box-type-where.input';

@ArgsType()
export class UpdateManyBoxTypeArgs {

    @Field(() => BoxTypeUpdateManyMutationInput, {nullable:false})
    data!: BoxTypeUpdateManyMutationInput;

    @Field(() => BoxTypeWhereInput, {nullable:true})
    where?: BoxTypeWhereInput;
}
