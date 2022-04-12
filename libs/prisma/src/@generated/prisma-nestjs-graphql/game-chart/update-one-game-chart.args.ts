import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartUpdateInput } from './game-chart-update.input';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';

@ArgsType()
export class UpdateOneGameChartArgs {

    @Field(() => GameChartUpdateInput, {nullable:false})
    data!: GameChartUpdateInput;

    @Field(() => GameChartWhereUniqueInput, {nullable:false})
    where!: GameChartWhereUniqueInput;
}
