import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsScalarWhereInput } from './game-statistics-scalar-where.input';
import { GameStatisticsUpdateManyMutationInput } from './game-statistics-update-many-mutation.input';

@InputType()
export class GameStatisticsUpdateManyWithWhereWithoutCurrencyInput {

    @Field(() => GameStatisticsScalarWhereInput, {nullable:false})
    where!: GameStatisticsScalarWhereInput;

    @Field(() => GameStatisticsUpdateManyMutationInput, {nullable:false})
    data!: GameStatisticsUpdateManyMutationInput;
}
