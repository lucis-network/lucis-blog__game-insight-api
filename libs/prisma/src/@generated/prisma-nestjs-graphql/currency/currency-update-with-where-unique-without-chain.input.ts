import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithoutChainInput } from './currency-update-without-chain.input';

@InputType()
export class CurrencyUpdateWithWhereUniqueWithoutChainInput {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;

    @Field(() => CurrencyUpdateWithoutChainInput, {nullable:false})
    data!: CurrencyUpdateWithoutChainInput;
}
