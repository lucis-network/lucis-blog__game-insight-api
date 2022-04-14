import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsCreateManyInput } from './game-statistics-create-many.input';

@ArgsType()
export class CreateManyGameStatisticsArgs {

    @Field(() => [GameStatisticsCreateManyInput], {nullable:false})
    data!: Array<GameStatisticsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
