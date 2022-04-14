import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { Chain } from '../chain/chain.model';
import { GameStatistics } from '../game-statistics/game-statistics.model';
import { CurrencyCount } from './currency-count.output';

@ObjectType()
export class Currency {

    @Field(() => ID, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    symbol!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => ChainSymbol, {nullable:false})
    chain_symbol!: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    owner!: string | null;

    @Field(() => Chain, {nullable:false})
    chain?: Chain;

    @Field(() => [GameStatistics], {nullable:true})
    game_statistic?: Array<GameStatistics>;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => CurrencyCount, {nullable:false})
    _count?: CurrencyCount;
}
