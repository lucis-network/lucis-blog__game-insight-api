import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';

@InputType()
export class GameRelationFilter {

    @Field(() => GameWhereInput, {nullable:true})
    is?: GameWhereInput;

    @Field(() => GameWhereInput, {nullable:true})
    isNot?: GameWhereInput;
}
