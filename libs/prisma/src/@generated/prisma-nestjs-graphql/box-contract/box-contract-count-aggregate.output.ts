import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxContractCountAggregate {

    @Field(() => Int, {nullable:false})
    uid!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    owner!: number;

    @Field(() => Int, {nullable:false})
    chain_symbol!: number;

    @Field(() => Int, {nullable:false})
    currency_symbol!: number;

    @Field(() => Int, {nullable:false})
    admin_address!: number;

    @Field(() => Int, {nullable:false})
    admin_prv_key!: number;

    @Field(() => Int, {nullable:false})
    is_transfered!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
