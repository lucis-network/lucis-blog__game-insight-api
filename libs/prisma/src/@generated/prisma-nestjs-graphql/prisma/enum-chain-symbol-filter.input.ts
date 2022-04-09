import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainSymbol } from './chain-symbol.enum';
import { NestedEnumChainSymbolFilter } from './nested-enum-chain-symbol-filter.input';

@InputType()
export class EnumChainSymbolFilter {

    @Field(() => ChainSymbol, {nullable:true})
    equals?: keyof typeof ChainSymbol;

    @Field(() => [ChainSymbol], {nullable:true})
    in?: Array<keyof typeof ChainSymbol>;

    @Field(() => [ChainSymbol], {nullable:true})
    notIn?: Array<keyof typeof ChainSymbol>;

    @Field(() => NestedEnumChainSymbolFilter, {nullable:true})
    not?: NestedEnumChainSymbolFilter;
}
