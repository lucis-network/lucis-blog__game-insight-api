import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';

@ArgsType()
export class FindUniqueGameChartArgs {

    @Field(() => GameChartWhereUniqueInput, {nullable:false})
    where!: GameChartWhereUniqueInput;
}
