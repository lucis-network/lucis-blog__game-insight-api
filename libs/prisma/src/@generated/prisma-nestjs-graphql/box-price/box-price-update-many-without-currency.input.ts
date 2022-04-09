import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateWithoutCurrencyInput } from './box-price-create-without-currency.input';
import { BoxPriceCreateOrConnectWithoutCurrencyInput } from './box-price-create-or-connect-without-currency.input';
import { BoxPriceUpsertWithWhereUniqueWithoutCurrencyInput } from './box-price-upsert-with-where-unique-without-currency.input';
import { BoxPriceCreateManyCurrencyInputEnvelope } from './box-price-create-many-currency-input-envelope.input';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithWhereUniqueWithoutCurrencyInput } from './box-price-update-with-where-unique-without-currency.input';
import { BoxPriceUpdateManyWithWhereWithoutCurrencyInput } from './box-price-update-many-with-where-without-currency.input';
import { BoxPriceScalarWhereInput } from './box-price-scalar-where.input';

@InputType()
export class BoxPriceUpdateManyWithoutCurrencyInput {

    @Field(() => [BoxPriceCreateWithoutCurrencyInput], {nullable:true})
    create?: Array<BoxPriceCreateWithoutCurrencyInput>;

    @Field(() => [BoxPriceCreateOrConnectWithoutCurrencyInput], {nullable:true})
    connectOrCreate?: Array<BoxPriceCreateOrConnectWithoutCurrencyInput>;

    @Field(() => [BoxPriceUpsertWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    upsert?: Array<BoxPriceUpsertWithWhereUniqueWithoutCurrencyInput>;

    @Field(() => BoxPriceCreateManyCurrencyInputEnvelope, {nullable:true})
    createMany?: BoxPriceCreateManyCurrencyInputEnvelope;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    set?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    delete?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    connect?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceUpdateWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    update?: Array<BoxPriceUpdateWithWhereUniqueWithoutCurrencyInput>;

    @Field(() => [BoxPriceUpdateManyWithWhereWithoutCurrencyInput], {nullable:true})
    updateMany?: Array<BoxPriceUpdateManyWithWhereWithoutCurrencyInput>;

    @Field(() => [BoxPriceScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxPriceScalarWhereInput>;
}
