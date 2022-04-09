import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyScalarWhereInput } from './currency-scalar-where.input';
import { CurrencyUpdateManyMutationInput } from './currency-update-many-mutation.input';

@InputType()
export class CurrencyUpdateManyWithWhereWithoutChainInput {

    @Field(() => CurrencyScalarWhereInput, {nullable:false})
    where!: CurrencyScalarWhereInput;

    @Field(() => CurrencyUpdateManyMutationInput, {nullable:false})
    data!: CurrencyUpdateManyMutationInput;
}
