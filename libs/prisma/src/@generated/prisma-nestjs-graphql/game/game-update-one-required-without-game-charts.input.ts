import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_chartsInput } from './game-create-without-game-charts.input';
import { GameCreateOrConnectWithoutGame_chartsInput } from './game-create-or-connect-without-game-charts.input';
import { GameUpsertWithoutGame_chartsInput } from './game-upsert-without-game-charts.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameUpdateWithoutGame_chartsInput } from './game-update-without-game-charts.input';

@InputType()
export class GameUpdateOneRequiredWithoutGame_chartsInput {

    @Field(() => GameCreateWithoutGame_chartsInput, {nullable:true})
    create?: GameCreateWithoutGame_chartsInput;

    @Field(() => GameCreateOrConnectWithoutGame_chartsInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_chartsInput;

    @Field(() => GameUpsertWithoutGame_chartsInput, {nullable:true})
    upsert?: GameUpsertWithoutGame_chartsInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;

    @Field(() => GameUpdateWithoutGame_chartsInput, {nullable:true})
    update?: GameUpdateWithoutGame_chartsInput;
}
