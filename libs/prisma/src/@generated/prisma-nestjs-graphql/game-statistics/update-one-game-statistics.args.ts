import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsUpdateInput } from './game-statistics-update.input';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';

@ArgsType()
export class UpdateOneGameStatisticsArgs {

    @Field(() => GameStatisticsUpdateInput, {nullable:false})
    data!: GameStatisticsUpdateInput;

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;
}
