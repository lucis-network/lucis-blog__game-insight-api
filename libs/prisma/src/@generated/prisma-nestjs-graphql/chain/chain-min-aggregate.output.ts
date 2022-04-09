import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChainMinAggregate {

    @Field(() => ChainSymbol, {nullable:true})
    symbol?: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => Int, {nullable:true})
    chain_id?: number;

    @Field(() => String, {nullable:true})
    rpc_url?: string;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
