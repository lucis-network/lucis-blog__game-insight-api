import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';

@ArgsType()
export class FindUniqueGameStatisticsArgs {

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;
}
