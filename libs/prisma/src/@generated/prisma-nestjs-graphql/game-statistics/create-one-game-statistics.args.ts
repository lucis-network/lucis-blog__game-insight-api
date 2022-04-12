import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsCreateInput } from './game-statistics-create.input';

@ArgsType()
export class CreateOneGameStatisticsArgs {

    @Field(() => GameStatisticsCreateInput, {nullable:false})
    data!: GameStatisticsCreateInput;
}
