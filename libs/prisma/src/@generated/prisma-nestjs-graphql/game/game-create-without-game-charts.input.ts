import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRankingCreateNestedOneWithoutGameInput } from '../game-ranking/game-ranking-create-nested-one-without-game.input';
import { GameInsightCreateNestedOneWithoutGameInput } from '../game-insight/game-insight-create-nested-one-without-game.input';
import { GameStatisticsCreateNestedManyWithoutGameInput } from '../game-statistics/game-statistics-create-nested-many-without-game.input';

@InputType()
export class GameCreateWithoutGame_chartsInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @Field(() => String, {nullable:true})
    desc_team?: string;

    @Field(() => String, {nullable:true})
    logo?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    whitepaper?: string;

    @Field(() => String, {nullable:true})
    pitchdeck?: string;

    @Field(() => String, {nullable:true})
    trailer_video?: string;

    @Field(() => String, {nullable:true})
    facebook?: string;

    @Field(() => String, {nullable:true})
    twitter?: string;

    @Field(() => String, {nullable:true})
    telegram?: string;

    @Field(() => String, {nullable:true})
    youtube?: string;

    @Field(() => String, {nullable:true})
    discord?: string;

    @Field(() => String, {nullable:true})
    road_map?: string;

    @Field(() => String, {nullable:true})
    game_team?: string;

    @Field(() => GameRankingCreateNestedOneWithoutGameInput, {nullable:true})
    game_ranking?: GameRankingCreateNestedOneWithoutGameInput;

    @Field(() => GameInsightCreateNestedOneWithoutGameInput, {nullable:true})
    game_insight?: GameInsightCreateNestedOneWithoutGameInput;

    @Field(() => GameStatisticsCreateNestedManyWithoutGameInput, {nullable:true})
    game_currencies?: GameStatisticsCreateNestedManyWithoutGameInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
