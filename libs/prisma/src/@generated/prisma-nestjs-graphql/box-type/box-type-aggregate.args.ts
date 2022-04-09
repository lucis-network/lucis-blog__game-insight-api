import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeWhereInput } from './box-type-where.input';
import { BoxTypeOrderByWithRelationAndSearchRelevanceInput } from './box-type-order-by-with-relation-and-search-relevance.input';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxTypeCountAggregateInput } from './box-type-count-aggregate.input';
import { BoxTypeAvgAggregateInput } from './box-type-avg-aggregate.input';
import { BoxTypeSumAggregateInput } from './box-type-sum-aggregate.input';
import { BoxTypeMinAggregateInput } from './box-type-min-aggregate.input';
import { BoxTypeMaxAggregateInput } from './box-type-max-aggregate.input';

@ArgsType()
export class BoxTypeAggregateArgs {

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

    @Field(() => BoxTypeCountAggregateInput, {nullable:true})
    _count?: BoxTypeCountAggregateInput;

    @Field(() => BoxTypeAvgAggregateInput, {nullable:true})
    _avg?: BoxTypeAvgAggregateInput;

    @Field(() => BoxTypeSumAggregateInput, {nullable:true})
    _sum?: BoxTypeSumAggregateInput;

    @Field(() => BoxTypeMinAggregateInput, {nullable:true})
    _min?: BoxTypeMinAggregateInput;

    @Field(() => BoxTypeMaxAggregateInput, {nullable:true})
    _max?: BoxTypeMaxAggregateInput;
}
