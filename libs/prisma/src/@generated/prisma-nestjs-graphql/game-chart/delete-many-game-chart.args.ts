import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartWhereInput } from './game-chart-where.input';

@ArgsType()
export class DeleteManyGameChartArgs {

    @Field(() => GameChartWhereInput, {nullable:true})
    where?: GameChartWhereInput;
}
