import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGameChartTypeFilter } from '../prisma/enum-game-chart-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameChartScalarWhereInput {

    @Field(() => [GameChartScalarWhereInput], {nullable:true})
    AND?: Array<GameChartScalarWhereInput>;

    @Field(() => [GameChartScalarWhereInput], {nullable:true})
    OR?: Array<GameChartScalarWhereInput>;

    @Field(() => [GameChartScalarWhereInput], {nullable:true})
    NOT?: Array<GameChartScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => EnumGameChartTypeFilter, {nullable:true})
    type?: EnumGameChartTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    game_uid?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    series?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
