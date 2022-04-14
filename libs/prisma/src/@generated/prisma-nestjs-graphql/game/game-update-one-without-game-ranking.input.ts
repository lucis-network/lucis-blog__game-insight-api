import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_rankingInput } from './game-create-without-game-ranking.input';
import { GameCreateOrConnectWithoutGame_rankingInput } from './game-create-or-connect-without-game-ranking.input';
import { GameUpsertWithoutGame_rankingInput } from './game-upsert-without-game-ranking.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameUpdateWithoutGame_rankingInput } from './game-update-without-game-ranking.input';

@InputType()
export class GameUpdateOneWithoutGame_rankingInput {

    @Field(() => GameCreateWithoutGame_rankingInput, {nullable:true})
    create?: GameCreateWithoutGame_rankingInput;

    @Field(() => GameCreateOrConnectWithoutGame_rankingInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_rankingInput;

    @Field(() => GameUpsertWithoutGame_rankingInput, {nullable:true})
    upsert?: GameUpsertWithoutGame_rankingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;

    @Field(() => GameUpdateWithoutGame_rankingInput, {nullable:true})
    update?: GameUpdateWithoutGame_rankingInput;
}
