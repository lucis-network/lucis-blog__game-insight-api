import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainSymbol } from './chain-symbol.enum';

@InputType()
export class EnumChainSymbolFieldUpdateOperationsInput {

    @Field(() => ChainSymbol, {nullable:true})
    set?: keyof typeof ChainSymbol;
}
