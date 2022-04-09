import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateWithoutContractInput } from './box-price-create-without-contract.input';
import { BoxPriceCreateOrConnectWithoutContractInput } from './box-price-create-or-connect-without-contract.input';
import { BoxPriceCreateManyContractInputEnvelope } from './box-price-create-many-contract-input-envelope.input';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';

@InputType()
export class BoxPriceCreateNestedManyWithoutContractInput {

    @Field(() => [BoxPriceCreateWithoutContractInput], {nullable:true})
    create?: Array<BoxPriceCreateWithoutContractInput>;

    @Field(() => [BoxPriceCreateOrConnectWithoutContractInput], {nullable:true})
    connectOrCreate?: Array<BoxPriceCreateOrConnectWithoutContractInput>;

    @Field(() => BoxPriceCreateManyContractInputEnvelope, {nullable:true})
    createMany?: BoxPriceCreateManyContractInputEnvelope;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    connect?: Array<BoxPriceWhereUniqueInput>;
}
