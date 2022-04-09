import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceCreateInput } from './box-price-create.input';
import { BoxPriceUpdateInput } from './box-price-update.input';

@ArgsType()
export class UpsertOneBoxPriceArgs {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceCreateInput, {nullable:false})
    create!: BoxPriceCreateInput;

    @Field(() => BoxPriceUpdateInput, {nullable:false})
    update!: BoxPriceUpdateInput;
}
