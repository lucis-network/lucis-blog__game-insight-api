import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithoutBoxTypeInput } from './box-price-update-without-box-type.input';
import { BoxPriceCreateWithoutBoxTypeInput } from './box-price-create-without-box-type.input';

@InputType()
export class BoxPriceUpsertWithWhereUniqueWithoutBoxTypeInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceUpdateWithoutBoxTypeInput, {nullable:false})
    update!: BoxPriceUpdateWithoutBoxTypeInput;

    @Field(() => BoxPriceCreateWithoutBoxTypeInput, {nullable:false})
    create!: BoxPriceCreateWithoutBoxTypeInput;
}
