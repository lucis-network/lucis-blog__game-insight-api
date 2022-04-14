import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartCreateInput } from './game-chart-create.input';

@ArgsType()
export class CreateOneGameChartArgs {

    @Field(() => GameChartCreateInput, {nullable:false})
    data!: GameChartCreateInput;
}
