import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartCreateManyGameInput } from './game-chart-create-many-game.input';

@InputType()
export class GameChartCreateManyGameInputEnvelope {

    @Field(() => [GameChartCreateManyGameInput], {nullable:false})
    data!: Array<GameChartCreateManyGameInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
