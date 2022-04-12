import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartType } from './game-chart-type.enum';

@InputType()
export class EnumGameChartTypeFieldUpdateOperationsInput {

    @Field(() => GameChartType, {nullable:true})
    set?: keyof typeof GameChartType;
}
