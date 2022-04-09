import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeWhereInput } from './box-type-where.input';
import { BoxTypeOrderByWithRelationAndSearchRelevanceInput } from './box-type-order-by-with-relation-and-search-relevance.input';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxTypeScalarFieldEnum } from './box-type-scalar-field.enum';

@ArgsType()
export class FindFirstBoxTypeArgs {

    @Field(() => BoxTypeWhereInput, {nullable:true})
    where?: BoxTypeWhereInput;

    @Field(() => [BoxTypeOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxTypeOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxTypeWhereUniqueInput, {nullable:true})
    cursor?: BoxTypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BoxTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BoxTypeScalarFieldEnum>;
}
