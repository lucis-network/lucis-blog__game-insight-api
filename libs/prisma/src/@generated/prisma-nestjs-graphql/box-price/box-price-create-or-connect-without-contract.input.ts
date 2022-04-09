import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceCreateWithoutContractInput } from './box-price-create-without-contract.input';

@InputType()
export class BoxPriceCreateOrConnectWithoutContractInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceCreateWithoutContractInput, {nullable:false})
    create!: BoxPriceCreateWithoutContractInput;
}
