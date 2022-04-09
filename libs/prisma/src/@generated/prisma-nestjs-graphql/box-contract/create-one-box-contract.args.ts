import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractCreateInput } from './box-contract-create.input';

@ArgsType()
export class CreateOneBoxContractArgs {

    @Field(() => BoxContractCreateInput, {nullable:false})
    data!: BoxContractCreateInput;
}
