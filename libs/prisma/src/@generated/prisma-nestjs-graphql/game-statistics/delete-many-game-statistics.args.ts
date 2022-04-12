import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsWhereInput } from './game-statistics-where.input';

@ArgsType()
export class DeleteManyGameStatisticsArgs {

    @Field(() => GameStatisticsWhereInput, {nullable:true})
    where?: GameStatisticsWhereInput;
}
