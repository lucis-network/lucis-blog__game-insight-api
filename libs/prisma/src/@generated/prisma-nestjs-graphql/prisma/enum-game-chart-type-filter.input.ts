import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartType } from './game-chart-type.enum';
import { NestedEnumGameChartTypeFilter } from './nested-enum-game-chart-type-filter.input';

@InputType()
export class EnumGameChartTypeFilter {

    @Field(() => GameChartType, {nullable:true})
    equals?: keyof typeof GameChartType;

    @Field(() => [GameChartType], {nullable:true})
    in?: Array<keyof typeof GameChartType>;

    @Field(() => [GameChartType], {nullable:true})
    notIn?: Array<keyof typeof GameChartType>;

    @Field(() => NestedEnumGameChartTypeFilter, {nullable:true})
    not?: NestedEnumGameChartTypeFilter;
}
