import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameInsightCreateWithoutGameInput } from './game-insight-create-without-game.input';
import { GameInsightCreateOrConnectWithoutGameInput } from './game-insight-create-or-connect-without-game.input';
import { GameInsightUpsertWithoutGameInput } from './game-insight-upsert-without-game.input';
import { GameInsightWhereUniqueInput } from './game-insight-where-unique.input';
import { GameInsightUpdateWithoutGameInput } from './game-insight-update-without-game.input';

@InputType()
export class GameInsightUpdateOneWithoutGameInput {

    @Field(() => GameInsightCreateWithoutGameInput, {nullable:true})
    create?: GameInsightCreateWithoutGameInput;

    @Field(() => GameInsightCreateOrConnectWithoutGameInput, {nullable:true})
    connectOrCreate?: GameInsightCreateOrConnectWithoutGameInput;

    @Field(() => GameInsightUpsertWithoutGameInput, {nullable:true})
    upsert?: GameInsightUpsertWithoutGameInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GameInsightWhereUniqueInput, {nullable:true})
    connect?: GameInsightWhereUniqueInput;

    @Field(() => GameInsightUpdateWithoutGameInput, {nullable:true})
    update?: GameInsightUpdateWithoutGameInput;
}
