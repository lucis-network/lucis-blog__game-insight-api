import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightWhereUniqueInput } from './game-insight-where-unique.input';

@ArgsType()
export class DeleteOneGameInsightArgs {

    @Field(() => GameInsightWhereUniqueInput, {nullable:false})
    where!: GameInsightWhereUniqueInput;
}
