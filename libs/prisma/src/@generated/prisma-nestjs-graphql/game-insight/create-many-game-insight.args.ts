import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightCreateManyInput } from './game-insight-create-many.input';

@ArgsType()
export class CreateManyGameInsightArgs {

    @Field(() => [GameInsightCreateManyInput], {nullable:false})
    data!: Array<GameInsightCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
