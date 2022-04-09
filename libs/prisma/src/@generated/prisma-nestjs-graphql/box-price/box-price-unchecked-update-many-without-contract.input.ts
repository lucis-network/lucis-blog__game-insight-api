import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateWithoutContractInput } from './box-price-create-without-contract.input';
import { BoxPriceCreateOrConnectWithoutContractInput } from './box-price-create-or-connect-without-contract.input';
import { BoxPriceUpsertWithWhereUniqueWithoutContractInput } from './box-price-upsert-with-where-unique-without-contract.input';
import { BoxPriceCreateManyContractInputEnvelope } from './box-price-create-many-contract-input-envelope.input';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithWhereUniqueWithoutContractInput } from './box-price-update-with-where-unique-without-contract.input';
import { BoxPriceUpdateManyWithWhereWithoutContractInput } from './box-price-update-many-with-where-without-contract.input';
import { BoxPriceScalarWhereInput } from './box-price-scalar-where.input';

@InputType()
export class BoxPriceUncheckedUpdateManyWithoutContractInput {

    @Field(() => [BoxPriceCreateWithoutContractInput], {nullable:true})
    create?: Array<BoxPriceCreateWithoutContractInput>;

    @Field(() => [BoxPriceCreateOrConnectWithoutContractInput], {nullable:true})
    connectOrCreate?: Array<BoxPriceCreateOrConnectWithoutContractInput>;

    @Field(() => [BoxPriceUpsertWithWhereUniqueWithoutContractInput], {nullable:true})
    upsert?: Array<BoxPriceUpsertWithWhereUniqueWithoutContractInput>;

    @Field(() => BoxPriceCreateManyContractInputEnvelope, {nullable:true})
    createMany?: BoxPriceCreateManyContractInputEnvelope;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    set?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    delete?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    connect?: Array<BoxPriceWhereUniqueInput>;

    @Field(() => [BoxPriceUpdateWithWhereUniqueWithoutContractInput], {nullable:true})
    update?: Array<BoxPriceUpdateWithWhereUniqueWithoutContractInput>;

    @Field(() => [BoxPriceUpdateManyWithWhereWithoutContractInput], {nullable:true})
    updateMany?: Array<BoxPriceUpdateManyWithWhereWithoutContractInput>;

    @Field(() => [BoxPriceScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxPriceScalarWhereInput>;
}
