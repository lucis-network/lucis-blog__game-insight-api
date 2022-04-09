import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { Chain } from '../chain/chain.model';
import { BoxPrice } from '../box-price/box-price.model';
import { BoxContractCount } from './box-contract-count.output';

@ObjectType()
export class BoxContract {

    @Field(() => ID, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    owner!: string | null;

    @Field(() => ChainSymbol, {nullable:false})
    chain_symbol!: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:true})
    currency_symbol!: string | null;

    @Field(() => String, {nullable:true})
    admin_address!: string | null;

    @Field(() => String, {nullable:true})
    admin_prv_key!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_transfered!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Chain, {nullable:false})
    chain?: Chain;

    @Field(() => [BoxPrice], {nullable:true})
    boxPrices?: Array<BoxPrice>;

    @Field(() => BoxContractCount, {nullable:false})
    _count?: BoxContractCount;
}
