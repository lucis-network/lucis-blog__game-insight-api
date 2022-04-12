import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartWhereInput } from './game-chart-where.input';

@InputType()
export class GameChartListRelationFilter {

    @Field(() => GameChartWhereInput, {nullable:true})
    every?: GameChartWhereInput;

    @Field(() => GameChartWhereInput, {nullable:true})
    some?: GameChartWhereInput;

    @Field(() => GameChartWhereInput, {nullable:true})
    none?: GameChartWhereInput;
}
