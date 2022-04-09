import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithoutContractInput } from './box-price-update-without-contract.input';

@InputType()
export class BoxPriceUpdateWithWhereUniqueWithoutContractInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceUpdateWithoutContractInput, {nullable:false})
    data!: BoxPriceUpdateWithoutContractInput;
}
