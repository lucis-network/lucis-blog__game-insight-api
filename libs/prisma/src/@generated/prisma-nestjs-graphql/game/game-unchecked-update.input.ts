import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GameChartUncheckedUpdateManyWithoutGameInput } from '../game-chart/game-chart-unchecked-update-many-without-game.input';
import { GameRankingUncheckedUpdateOneWithoutGameInput } from '../game-ranking/game-ranking-unchecked-update-one-without-game.input';
import { GameInsightUncheckedUpdateOneWithoutGameInput } from '../game-insight/game-insight-unchecked-update-one-without-game.input';
import { GameStatisticsUncheckedUpdateManyWithoutGameInput } from '../game-statistics/game-statistics-unchecked-update-many-without-game.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class GameUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uid?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    desc?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    desc_team?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    logo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    whitepaper?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    pitchdeck?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    trailer_video?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebook?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    twitter?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    telegram?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    youtube?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    discord?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    road_map?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    game_team?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GameChartUncheckedUpdateManyWithoutGameInput, {nullable:true})
    game_charts?: GameChartUncheckedUpdateManyWithoutGameInput;

    @Field(() => GameRankingUncheckedUpdateOneWithoutGameInput, {nullable:true})
    game_ranking?: GameRankingUncheckedUpdateOneWithoutGameInput;

    @Field(() => GameInsightUncheckedUpdateOneWithoutGameInput, {nullable:true})
    game_insight?: GameInsightUncheckedUpdateOneWithoutGameInput;

    @Field(() => GameStatisticsUncheckedUpdateManyWithoutGameInput, {nullable:true})
    game_currencies?: GameStatisticsUncheckedUpdateManyWithoutGameInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
