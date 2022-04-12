import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGameChartTypeFilter } from '../prisma/enum-game-chart-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { GameRelationFilter } from '../game/game-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameChartWhereInput {

    @Field(() => [GameChartWhereInput], {nullable:true})
    AND?: Array<GameChartWhereInput>;

    @Field(() => [GameChartWhereInput], {nullable:true})
    OR?: Array<GameChartWhereInput>;

    @Field(() => [GameChartWhereInput], {nullable:true})
    NOT?: Array<GameChartWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => EnumGameChartTypeFilter, {nullable:true})
    type?: EnumGameChartTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    game_uid?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    series?: JsonNullableFilter;

    @Field(() => GameRelationFilter, {nullable:true})
    game?: GameRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
