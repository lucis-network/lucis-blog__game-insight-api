import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateWithoutCurrencyInput } from './box-price-create-without-currency.input';
import { BoxPriceCreateOrConnectWithoutCurrencyInput } from './box-price-create-or-connect-without-currency.input';
import { BoxPriceCreateManyCurrencyInputEnvelope } from './box-price-create-many-currency-input-envelope.input';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';

@InputType()
export class BoxPriceUncheckedCreateNestedManyWithoutCurrencyInput {

    @Field(() => [BoxPriceCreateWithoutCurrencyInput], {nullable:true})
    create?: Array<BoxPriceCreateWithoutCurrencyInput>;

    @Field(() => [BoxPriceCreateOrConnectWithoutCurrencyInput], {nullable:true})
    connectOrCreate?: Array<BoxPriceCreateOrConnectWithoutCurrencyInput>;

    @Field(() => BoxPriceCreateManyCurrencyInputEnvelope, {nullable:true})
    createMany?: BoxPriceCreateManyCurrencyInputEnvelope;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    connect?: Array<BoxPriceWhereUniqueInput>;
}
