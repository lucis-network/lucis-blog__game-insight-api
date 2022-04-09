import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithoutChainInput } from './currency-update-without-chain.input';
import { CurrencyCreateWithoutChainInput } from './currency-create-without-chain.input';

@InputType()
export class CurrencyUpsertWithWhereUniqueWithoutChainInput {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;

    @Field(() => CurrencyUpdateWithoutChainInput, {nullable:false})
    update!: CurrencyUpdateWithoutChainInput;

    @Field(() => CurrencyCreateWithoutChainInput, {nullable:false})
    create!: CurrencyCreateWithoutChainInput;
}
