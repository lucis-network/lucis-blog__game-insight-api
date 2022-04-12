import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightUpdateInput } from './game-insight-update.input';
import { GameInsightWhereUniqueInput } from './game-insight-where-unique.input';

@ArgsType()
export class UpdateOneGameInsightArgs {

    @Field(() => GameInsightUpdateInput, {nullable:false})
    data!: GameInsightUpdateInput;

    @Field(() => GameInsightWhereUniqueInput, {nullable:false})
    where!: GameInsightWhereUniqueInput;
}
