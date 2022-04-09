import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractUpdateWithoutBoxPricesInput } from './box-contract-update-without-box-prices.input';
import { BoxContractCreateWithoutBoxPricesInput } from './box-contract-create-without-box-prices.input';

@InputType()
export class BoxContractUpsertWithoutBoxPricesInput {

    @Field(() => BoxContractUpdateWithoutBoxPricesInput, {nullable:false})
    update!: BoxContractUpdateWithoutBoxPricesInput;

    @Field(() => BoxContractCreateWithoutBoxPricesInput, {nullable:false})
    create!: BoxContractCreateWithoutBoxPricesInput;
}
