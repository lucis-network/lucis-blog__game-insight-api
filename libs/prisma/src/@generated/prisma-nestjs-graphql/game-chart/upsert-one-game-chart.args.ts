import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';
import { GameChartCreateInput } from './game-chart-create.input';
import { GameChartUpdateInput } from './game-chart-update.input';

@ArgsType()
export class UpsertOneGameChartArgs {

    @Field(() => GameChartWhereUniqueInput, {nullable:false})
    where!: GameChartWhereUniqueInput;

    @Field(() => GameChartCreateInput, {nullable:false})
    create!: GameChartCreateInput;

    @Field(() => GameChartUpdateInput, {nullable:false})
    update!: GameChartUpdateInput;
}
