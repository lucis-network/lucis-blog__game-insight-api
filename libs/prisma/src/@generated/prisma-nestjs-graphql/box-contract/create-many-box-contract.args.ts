import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractCreateManyInput } from './box-contract-create-many.input';

@ArgsType()
export class CreateManyBoxContractArgs {

    @Field(() => [BoxContractCreateManyInput], {nullable:false})
    data!: Array<BoxContractCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
