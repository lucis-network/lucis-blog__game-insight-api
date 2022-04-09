import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';

@InputType()
export class ChainWhereUniqueInput {

    @Field(() => ChainSymbol, {nullable:true})
    symbol?: keyof typeof ChainSymbol;
}
