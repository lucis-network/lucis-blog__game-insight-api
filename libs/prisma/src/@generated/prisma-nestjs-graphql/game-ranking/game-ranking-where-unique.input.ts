import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameRankingWhereUniqueInput {

    @Field(() => String, {nullable:true})
    game_uid?: string;
}
