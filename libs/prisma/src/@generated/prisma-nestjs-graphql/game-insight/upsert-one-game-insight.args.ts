import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightWhereUniqueInput } from './game-insight-where-unique.input';
import { GameInsightCreateInput } from './game-insight-create.input';
import { GameInsightUpdateInput } from './game-insight-update.input';

@ArgsType()
export class UpsertOneGameInsightArgs {

    @Field(() => GameInsightWhereUniqueInput, {nullable:false})
    where!: GameInsightWhereUniqueInput;

    @Field(() => GameInsightCreateInput, {nullable:false})
    create!: GameInsightCreateInput;

    @Field(() => GameInsightUpdateInput, {nullable:false})
    update!: GameInsightUpdateInput;
}
