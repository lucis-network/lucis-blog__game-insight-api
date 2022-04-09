import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainSymbol } from './chain-symbol.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumChainSymbolFilter } from './nested-enum-chain-symbol-filter.input';

@InputType()
export class NestedEnumChainSymbolWithAggregatesFilter {

    @Field(() => ChainSymbol, {nullable:true})
    equals?: keyof typeof ChainSymbol;

    @Field(() => [ChainSymbol], {nullable:true})
    in?: Array<keyof typeof ChainSymbol>;

    @Field(() => [ChainSymbol], {nullable:true})
    notIn?: Array<keyof typeof ChainSymbol>;

    @Field(() => NestedEnumChainSymbolWithAggregatesFilter, {nullable:true})
    not?: NestedEnumChainSymbolWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumChainSymbolFilter, {nullable:true})
    _min?: NestedEnumChainSymbolFilter;

    @Field(() => NestedEnumChainSymbolFilter, {nullable:true})
    _max?: NestedEnumChainSymbolFilter;
}
