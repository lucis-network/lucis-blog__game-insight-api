import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightCreateInput } from './game-insight-create.input';

@ArgsType()
export class CreateOneGameInsightArgs {

    @Field(() => GameInsightCreateInput, {nullable:false})
    data!: GameInsightCreateInput;
}
