import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractWhereInput } from './box-contract-where.input';

@ArgsType()
export class DeleteManyBoxContractArgs {

    @Field(() => BoxContractWhereInput, {nullable:true})
    where?: BoxContractWhereInput;
}
