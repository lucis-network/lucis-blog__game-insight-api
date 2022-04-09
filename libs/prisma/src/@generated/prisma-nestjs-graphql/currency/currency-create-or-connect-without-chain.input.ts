import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyCreateWithoutChainInput } from './currency-create-without-chain.input';

@InputType()
export class CurrencyCreateOrConnectWithoutChainInput {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;

    @Field(() => CurrencyCreateWithoutChainInput, {nullable:false})
    create!: CurrencyCreateWithoutChainInput;
}
