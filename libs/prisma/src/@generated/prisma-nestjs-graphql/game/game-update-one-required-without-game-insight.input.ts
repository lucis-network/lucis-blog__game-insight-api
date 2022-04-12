import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_insightInput } from './game-create-without-game-insight.input';
import { GameCreateOrConnectWithoutGame_insightInput } from './game-create-or-connect-without-game-insight.input';
import { GameUpsertWithoutGame_insightInput } from './game-upsert-without-game-insight.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameUpdateWithoutGame_insightInput } from './game-update-without-game-insight.input';

@InputType()
export class GameUpdateOneRequiredWithoutGame_insightInput {

    @Field(() => GameCreateWithoutGame_insightInput, {nullable:true})
    create?: GameCreateWithoutGame_insightInput;

    @Field(() => GameCreateOrConnectWithoutGame_insightInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_insightInput;

    @Field(() => GameUpsertWithoutGame_insightInput, {nullable:true})
    upsert?: GameUpsertWithoutGame_insightInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;

    @Field(() => GameUpdateWithoutGame_insightInput, {nullable:true})
    update?: GameUpdateWithoutGame_insightInput;
}
