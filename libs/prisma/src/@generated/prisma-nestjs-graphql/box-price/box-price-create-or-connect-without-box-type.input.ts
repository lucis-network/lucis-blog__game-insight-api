import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceCreateWithoutBoxTypeInput } from './box-price-create-without-box-type.input';

@InputType()
export class BoxPriceCreateOrConnectWithoutBoxTypeInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceCreateWithoutBoxTypeInput, {nullable:false})
    create!: BoxPriceCreateWithoutBoxTypeInput;
}
