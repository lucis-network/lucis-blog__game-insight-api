import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsUpdateManyMutationInput } from './game-statistics-update-many-mutation.input';
import { GameStatisticsWhereInput } from './game-statistics-where.input';

@ArgsType()
export class UpdateManyGameStatisticsArgs {

    @Field(() => GameStatisticsUpdateManyMutationInput, {nullable:false})
    data!: GameStatisticsUpdateManyMutationInput;

    @Field(() => GameStatisticsWhereInput, {nullable:true})
    where?: GameStatisticsWhereInput;
}
