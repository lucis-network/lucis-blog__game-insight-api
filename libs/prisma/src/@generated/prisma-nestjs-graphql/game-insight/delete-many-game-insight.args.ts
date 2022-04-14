import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightWhereInput } from './game-insight-where.input';

@ArgsType()
export class DeleteManyGameInsightArgs {

    @Field(() => GameInsightWhereInput, {nullable:true})
    where?: GameInsightWhereInput;
}
