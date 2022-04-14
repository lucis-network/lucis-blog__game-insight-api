import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';
import { GameChartCreateWithoutGameInput } from './game-chart-create-without-game.input';

@InputType()
export class GameChartCreateOrConnectWithoutGameInput {

    @Field(() => GameChartWhereUniqueInput, {nullable:false})
    where!: GameChartWhereUniqueInput;

    @Field(() => GameChartCreateWithoutGameInput, {nullable:false})
    create!: GameChartCreateWithoutGameInput;
}
