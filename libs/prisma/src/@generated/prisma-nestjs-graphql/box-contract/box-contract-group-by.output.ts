import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { BoxContractCountAggregate } from './box-contract-count-aggregate.output';
import { BoxContractMinAggregate } from './box-contract-min-aggregate.output';
import { BoxContractMaxAggregate } from './box-contract-max-aggregate.output';

@ObjectType()
export class BoxContractGroupBy {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    owner?: string;

    @Field(() => ChainSymbol, {nullable:false})
    chain_symbol!: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:true})
    currency_symbol?: string;

    @Field(() => String, {nullable:true})
    admin_address?: string;

    @Field(() => String, {nullable:true})
    admin_prv_key?: string;

    @Field(() => Boolean, {nullable:false})
    is_transfered!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => BoxContractCountAggregate, {nullable:true})
    _count?: BoxContractCountAggregate;

    @Field(() => BoxContractMinAggregate, {nullable:true})
    _min?: BoxContractMinAggregate;

    @Field(() => BoxContractMaxAggregate, {nullable:true})
    _max?: BoxContractMaxAggregate;
}
