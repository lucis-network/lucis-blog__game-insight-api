import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractWhereInput } from './box-contract-where.input';
import { BoxContractOrderByWithAggregationInput } from './box-contract-order-by-with-aggregation.input';
import { BoxContractScalarFieldEnum } from './box-contract-scalar-field.enum';
import { BoxContractScalarWhereWithAggregatesInput } from './box-contract-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BoxContractCountAggregateInput } from './box-contract-count-aggregate.input';
import { BoxContractMinAggregateInput } from './box-contract-min-aggregate.input';
import { BoxContractMaxAggregateInput } from './box-contract-max-aggregate.input';

@ArgsType()
export class BoxContractGroupByArgs {

    @Field(() => BoxContractWhereInput, {nullable:true})
    where?: BoxContractWhereInput;

    @Field(() => [BoxContractOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BoxContractOrderByWithAggregationInput>;

    @Field(() => [BoxContractScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BoxContractScalarFieldEnum>;

    @Field(() => BoxContractScalarWhereWithAggregatesInput, {nullable:true})
    having?: BoxContractScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BoxContractCountAggregateInput, {nullable:true})
    _count?: BoxContractCountAggregateInput;

    @Field(() => BoxContractMinAggregateInput, {nullable:true})
    _min?: BoxContractMinAggregateInput;

    @Field(() => BoxContractMaxAggregateInput, {nullable:true})
    _max?: BoxContractMaxAggregateInput;
}
