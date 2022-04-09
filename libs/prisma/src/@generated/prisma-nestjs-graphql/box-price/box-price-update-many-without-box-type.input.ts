import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateWithoutBoxTypeInput } from './box-price-create-without-box-type.input';
import { BoxPriceCreateOrConnectWithoutBoxTypeInput } from './box-price-create-or-connect-without-box-type.input';
import { BoxPriceUpsertWithWhereUniqueWithoutBoxTypeInput } from './box-price-upsert-with-where-unique-without-box-type.input';
import { BoxPriceCreateManyBoxTypeInputEnvelope } from './box-price-create-many-box-type-input-envelope.input';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithWhereUniqueWithoutBoxTypeInput } from './box-price-update-with-where-unique-without-box-type.input';
import { BoxPriceUpdateManyWithWhereWithoutBoxTypeInput } from './box-price-update-many-with-where-without-box-type.input';
import { BoxPriceScalarWhereInput } from './box-price-scalar-where.input';

@InputType()
export class BoxPriceUpdateManyWithoutBoxTypeInput {

    @Field(() => [BoxPriceCreateWithoutBoxTypeInput], {nullable:true})
    create?: Array<BoxPriceCreateWithoutBoxTypeInput>;

    @Field(() => [BoxPriceCreateOrConnectWithoutBoxTypeInput], {nullable:true})
    connectOrCreate?: Array<BoxPriceCreateOrConnectWithoutBoxTypeInput>;

    @Field(() => [BoxPriceUpsertWithWhereUniqueWithoutBoxTypeInput], {nullable:true})
    upsert?: Array<BoxPriceUpsertWithWhereUniqueWithoutBoxTypeInput>;

    @Field(() => BoxPriceCreateManyBoxTypeInputEnvelope, {nullable:true})
    createMany?: BoxPriceCreateManyBoxTypeInputEnvelope;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    set?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    delete?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    connect?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceUpdateWithWhereUniqueWithoutBoxTypeInput], {nullable:true})
    update?: Array<BoxPriceUpdateWithWhereUniqueWithoutBoxTypeInput>;

    @Field(() => [BoxPriceUpdateManyWithWhereWithoutBoxTypeInput], {nullable:true})
    updateMany?: Array<BoxPriceUpdateManyWithWhereWithoutBoxTypeInput>;

    @Field(() => [BoxPriceScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxPriceScalarWhereInput>;
}
