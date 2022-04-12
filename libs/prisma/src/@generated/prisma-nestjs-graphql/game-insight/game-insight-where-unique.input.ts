import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameInsightWhereUniqueInput {

    @Field(() => String, {nullable:true})
    game_uid?: string;
}
