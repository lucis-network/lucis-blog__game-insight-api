import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { Int } from '@nestjs/graphql';
import { Currency } from '../currency/currency.model';
import { ChainCount } from './chain-count.output';

@ObjectType()
export class Chain {

    @Field(() => ChainSymbol, {nullable:false})
    symbol!: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => Int, {nullable:true})
    chain_id!: number | null;

    @Field(() => String, {nullable:true})
    rpc_url!: string | null;

    @Field(() => Boolean, {nullable:true})
    status!: boolean | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [Currency], {nullable:true})
    currencies?: Array<Currency>;

    @Field(() => ChainCount, {nullable:false})
    _count?: ChainCount;
}
