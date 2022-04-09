import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractCreateWithoutBoxPricesInput } from './box-contract-create-without-box-prices.input';
import { BoxContractCreateOrConnectWithoutBoxPricesInput } from './box-contract-create-or-connect-without-box-prices.input';
import { BoxContractUpsertWithoutBoxPricesInput } from './box-contract-upsert-without-box-prices.input';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { BoxContractUpdateWithoutBoxPricesInput } from './box-contract-update-without-box-prices.input';

@InputType()
export class BoxContractUpdateOneWithoutBoxPricesInput {

    @Field(() => BoxContractCreateWithoutBoxPricesInput, {nullable:true})
    create?: BoxContractCreateWithoutBoxPricesInput;

    @Field(() => BoxContractCreateOrConnectWithoutBoxPricesInput, {nullable:true})
    connectOrCreate?: BoxContractCreateOrConnectWithoutBoxPricesInput;

    @Field(() => BoxContractUpsertWithoutBoxPricesInput, {nullable:true})
    upsert?: BoxContractUpsertWithoutBoxPricesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BoxContractWhereUniqueInput, {nullable:true})
    connect?: BoxContractWhereUniqueInput;

    @Field(() => BoxContractUpdateWithoutBoxPricesInput, {nullable:true})
    update?: BoxContractUpdateWithoutBoxPricesInput;
}
