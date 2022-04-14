import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartScalarWhereInput } from './game-chart-scalar-where.input';
import { GameChartUpdateManyMutationInput } from './game-chart-update-many-mutation.input';

@InputType()
export class GameChartUpdateManyWithWhereWithoutGameInput {

    @Field(() => GameChartScalarWhereInput, {nullable:false})
    where!: GameChartScalarWhereInput;

    @Field(() => GameChartUpdateManyMutationInput, {nullable:false})
    data!: GameChartUpdateManyMutationInput;
}
