import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartUpdateManyMutationInput } from './game-chart-update-many-mutation.input';
import { GameChartWhereInput } from './game-chart-where.input';

@ArgsType()
export class UpdateManyGameChartArgs {

    @Field(() => GameChartUpdateManyMutationInput, {nullable:false})
    data!: GameChartUpdateManyMutationInput;

    @Field(() => GameChartWhereInput, {nullable:true})
    where?: GameChartWhereInput;
}
