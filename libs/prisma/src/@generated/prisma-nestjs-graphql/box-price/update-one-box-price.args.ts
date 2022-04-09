import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxPriceUpdateInput } from './box-price-update.input';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';

@ArgsType()
export class UpdateOneBoxPriceArgs {

    @Field(() => BoxPriceUpdateInput, {nullable:false})
    data!: BoxPriceUpdateInput;

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;
}
