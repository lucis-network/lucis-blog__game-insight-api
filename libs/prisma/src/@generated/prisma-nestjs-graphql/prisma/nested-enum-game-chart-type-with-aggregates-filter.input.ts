import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartType } from './game-chart-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGameChartTypeFilter } from './nested-enum-game-chart-type-filter.input';

@InputType()
export class NestedEnumGameChartTypeWithAggregatesFilter {

    @Field(() => GameChartType, {nullable:true})
    equals?: keyof typeof GameChartType;

    @Field(() => [GameChartType], {nullable:true})
    in?: Array<keyof typeof GameChartType>;

    @Field(() => [GameChartType], {nullable:true})
    notIn?: Array<keyof typeof GameChartType>;

    @Field(() => NestedEnumGameChartTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGameChartTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGameChartTypeFilter, {nullable:true})
    _min?: NestedEnumGameChartTypeFilter;

    @Field(() => NestedEnumGameChartTypeFilter, {nullable:true})
    _max?: NestedEnumGameChartTypeFilter;
}
