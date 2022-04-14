import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_statisticsInput } from './game-create-without-game-statistics.input';
import { GameCreateOrConnectWithoutGame_statisticsInput } from './game-create-or-connect-without-game-statistics.input';
import { GameUpsertWithoutGame_statisticsInput } from './game-upsert-without-game-statistics.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameUpdateWithoutGame_statisticsInput } from './game-update-without-game-statistics.input';

@InputType()
export class GameUpdateOneRequiredWithoutGame_statisticsInput {

    @Field(() => GameCreateWithoutGame_statisticsInput, {nullable:true})
    create?: GameCreateWithoutGame_statisticsInput;

    @Field(() => GameCreateOrConnectWithoutGame_statisticsInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_statisticsInput;

    @Field(() => GameUpsertWithoutGame_statisticsInput, {nullable:true})
    upsert?: GameUpsertWithoutGame_statisticsInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;

    @Field(() => GameUpdateWithoutGame_statisticsInput, {nullable:true})
    update?: GameUpdateWithoutGame_statisticsInput;
}
