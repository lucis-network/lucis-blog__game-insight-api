import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumGameChartTypeWithAggregatesFilter } from '../prisma/enum-game-chart-type-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class GameChartScalarWhereWithAggregatesInput {

    @Field(() => [GameChartScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GameChartScalarWhereWithAggregatesInput>;

    @Field(() => [GameChartScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GameChartScalarWhereWithAggregatesInput>;

    @Field(() => [GameChartScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GameChartScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uid?: StringWithAggregatesFilter;

    @Field(() => EnumGameChartTypeWithAggregatesFilter, {nullable:true})
    type?: EnumGameChartTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_uid?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    series?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
