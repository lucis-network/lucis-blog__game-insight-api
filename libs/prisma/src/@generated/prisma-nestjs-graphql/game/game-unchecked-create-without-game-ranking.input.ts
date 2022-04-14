import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartUncheckedCreateNestedManyWithoutGameInput } from '../game-chart/game-chart-unchecked-create-nested-many-without-game.input';
import { GameInsightUncheckedCreateNestedOneWithoutGameInput } from '../game-insight/game-insight-unchecked-create-nested-one-without-game.input';
import { GameStatisticsUncheckedCreateNestedManyWithoutGameInput } from '../game-statistics/game-statistics-unchecked-create-nested-many-without-game.input';

@InputType()
export class GameUncheckedCreateWithoutGame_rankingInput {

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

    @Field(() => GameChartUncheckedCreateNestedManyWithoutGameInput, {nullable:true})
    game_charts?: GameChartUncheckedCreateNestedManyWithoutGameInput;

    @Field(() => GameInsightUncheckedCreateNestedOneWithoutGameInput, {nullable:true})
    game_insight?: GameInsightUncheckedCreateNestedOneWithoutGameInput;

    @Field(() => GameStatisticsUncheckedCreateNestedManyWithoutGameInput, {nullable:true})
    game_statistics?: GameStatisticsUncheckedCreateNestedManyWithoutGameInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
