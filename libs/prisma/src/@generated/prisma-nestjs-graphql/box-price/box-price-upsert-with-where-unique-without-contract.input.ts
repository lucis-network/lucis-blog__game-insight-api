import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithoutContractInput } from './box-price-update-without-contract.input';
import { BoxPriceCreateWithoutContractInput } from './box-price-create-without-contract.input';

@InputType()
export class BoxPriceUpsertWithWhereUniqueWithoutContractInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceUpdateWithoutContractInput, {nullable:false})
    update!: BoxPriceUpdateWithoutContractInput;

    @Field(() => BoxPriceCreateWithoutContractInput, {nullable:false})
    create!: BoxPriceCreateWithoutContractInput;
}
