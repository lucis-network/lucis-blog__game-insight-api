import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';
import { GameChartUpdateWithoutGameInput } from './game-chart-update-without-game.input';

@InputType()
export class GameChartUpdateWithWhereUniqueWithoutGameInput {

    @Field(() => GameChartWhereUniqueInput, {nullable:false})
    where!: GameChartWhereUniqueInput;

    @Field(() => GameChartUpdateWithoutGameInput, {nullable:false})
    data!: GameChartUpdateWithoutGameInput;
}
