import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightUpdateManyMutationInput } from './game-insight-update-many-mutation.input';
import { GameInsightWhereInput } from './game-insight-where.input';

@ArgsType()
export class UpdateManyGameInsightArgs {

    @Field(() => GameInsightUpdateManyMutationInput, {nullable:false})
    data!: GameInsightUpdateManyMutationInput;

    @Field(() => GameInsightWhereInput, {nullable:true})
    where?: GameInsightWhereInput;
}
