import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsWhereInput } from './game-statistics-where.input';

@InputType()
export class GameStatisticsListRelationFilter {

    @Field(() => GameStatisticsWhereInput, {nullable:true})
    every?: GameStatisticsWhereInput;

    @Field(() => GameStatisticsWhereInput, {nullable:true})
    some?: GameStatisticsWhereInput;

    @Field(() => GameStatisticsWhereInput, {nullable:true})
    none?: GameStatisticsWhereInput;
}
