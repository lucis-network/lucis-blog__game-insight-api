import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameInsightWhereInput } from './game-insight-where.input';

@InputType()
export class GameInsightRelationFilter {

    @Field(() => GameInsightWhereInput, {nullable:true})
    is?: GameInsightWhereInput;

    @Field(() => GameInsightWhereInput, {nullable:true})
    isNot?: GameInsightWhereInput;
}
