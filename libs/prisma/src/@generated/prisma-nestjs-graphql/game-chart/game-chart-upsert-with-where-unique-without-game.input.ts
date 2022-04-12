import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';
import { GameChartUpdateWithoutGameInput } from './game-chart-update-without-game.input';
import { GameChartCreateWithoutGameInput } from './game-chart-create-without-game.input';

@InputType()
export class GameChartUpsertWithWhereUniqueWithoutGameInput {

    @Field(() => GameChartWhereUniqueInput, {nullable:false})
    where!: GameChartWhereUniqueInput;

    @Field(() => GameChartUpdateWithoutGameInput, {nullable:false})
    update!: GameChartUpdateWithoutGameInput;

    @Field(() => GameChartCreateWithoutGameInput, {nullable:false})
    create!: GameChartCreateWithoutGameInput;
}
