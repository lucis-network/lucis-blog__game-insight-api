import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxPriceWhereInput } from './box-price-where.input';
import { BoxPriceOrderByWithRelationAndSearchRelevanceInput } from './box-price-order-by-with-relation-and-search-relevance.input';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxPriceScalarFieldEnum } from './box-price-scalar-field.enum';

@ArgsType()
export class FindFirstBoxPriceArgs {

    @Field(() => BoxPriceWhereInput, {nullable:true})
    where?: BoxPriceWhereInput;

    @Field(() => [BoxPriceOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxPriceOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxPriceWhereUniqueInput, {nullable:true})
    cursor?: BoxPriceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BoxPriceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BoxPriceScalarFieldEnum>;
}
