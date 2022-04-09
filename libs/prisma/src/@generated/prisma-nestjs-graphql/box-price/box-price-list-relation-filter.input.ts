import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereInput } from './box-price-where.input';

@InputType()
export class BoxPriceListRelationFilter {

    @Field(() => BoxPriceWhereInput, {nullable:true})
    every?: BoxPriceWhereInput;

    @Field(() => BoxPriceWhereInput, {nullable:true})
    some?: BoxPriceWhereInput;

    @Field(() => BoxPriceWhereInput, {nullable:true})
    none?: BoxPriceWhereInput;
}
