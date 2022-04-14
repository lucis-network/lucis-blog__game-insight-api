import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartCreateManyInput } from './game-chart-create-many.input';

@ArgsType()
export class CreateManyGameChartArgs {

    @Field(() => [GameChartCreateManyInput], {nullable:false})
    data!: Array<GameChartCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
