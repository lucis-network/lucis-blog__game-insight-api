import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithoutBoxTypeInput } from './box-price-update-without-box-type.input';

@InputType()
export class BoxPriceUpdateWithWhereUniqueWithoutBoxTypeInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceUpdateWithoutBoxTypeInput, {nullable:false})
    data!: BoxPriceUpdateWithoutBoxTypeInput;
}
