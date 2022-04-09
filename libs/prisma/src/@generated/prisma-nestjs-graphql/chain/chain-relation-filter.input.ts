import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainWhereInput } from './chain-where.input';

@InputType()
export class ChainRelationFilter {

    @Field(() => ChainWhereInput, {nullable:true})
    is?: ChainWhereInput;

    @Field(() => ChainWhereInput, {nullable:true})
    isNot?: ChainWhereInput;
}
