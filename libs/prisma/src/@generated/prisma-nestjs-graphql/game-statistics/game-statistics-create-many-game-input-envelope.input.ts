import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsCreateManyGameInput } from './game-statistics-create-many-game.input';

@InputType()
export class GameStatisticsCreateManyGameInputEnvelope {

    @Field(() => [GameStatisticsCreateManyGameInput], {nullable:false})
    data!: Array<GameStatisticsCreateManyGameInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
