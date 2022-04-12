import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsCreateInput } from './game-statistics-create.input';
import { GameStatisticsUpdateInput } from './game-statistics-update.input';

@ArgsType()
export class UpsertOneGameStatisticsArgs {

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;

    @Field(() => GameStatisticsCreateInput, {nullable:false})
    create!: GameStatisticsCreateInput;

    @Field(() => GameStatisticsUpdateInput, {nullable:false})
    update!: GameStatisticsUpdateInput;
}
